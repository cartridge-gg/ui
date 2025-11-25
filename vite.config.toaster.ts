import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "src/toaster.ts"),
      name: "CartridgeToaster",
      fileName: "toaster",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    minify: "esbuild",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
