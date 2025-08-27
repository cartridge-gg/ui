import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { fileURLToPath, URL } from "url";

import { join, dirname, resolve } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
		name: "@storybook/react-native-web-vite",
		options: {
			pluginReactOptions: {
				jsxRuntime: "automatic",
				jsxImportSource: "nativewind",
				babel: {
					plugins: ["react-native-reanimated/plugin"],
				},
			},
		},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [],
  previewHead: process.env.SNAPSHOT
    ? (head) => `${head}<style>*{animation:none!important;}</style>`
    : undefined,

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      esbuild: {
        loader: 'tsx',
        include: /\.(tsx?|jsx?|mjs)$/,
      },
      optimizeDeps: {
        esbuildOptions: {
          loader: {
            '.mjs': 'tsx',
            '.js': 'tsx',
          },
        },
        include: ["@rn-primitives/slot"],
      },
      resolve: {
        alias: {
          "@": fileURLToPath(new URL(resolve(__dirname, "../src/"), import.meta.url)),
        }
      }
    })
  },
};

export default config;
