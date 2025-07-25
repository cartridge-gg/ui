import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CreateAccount } from "./create";

const meta: Meta<typeof CreateAccount> = {
  title: "Modules/CreateAccount",
  component: CreateAccount,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    usernameField: {
      value: "",
      error: undefined,
    },
    validation: {
      status: "idle",
      error: undefined,
      exists: undefined,
    },
    error: undefined,
    isLoading: false,
    autoFocus: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const Default: Story = {};

export const DefaultValidating: Story = {
  args: {
    usernameField: {
      value: "shinobi",
    },
    validation: {
      status: "validating",
    },
  },
};

export const DefaultLogin: Story = {
  args: {
    usernameField: {
      value: "shinobi",
      error: undefined,
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: true,
    },
  },
};

export const DefaultNew: Story = {
  args: {
    usernameField: {
      value: "shinobi5",
      error: undefined,
    },
    validation: {
      status: "valid",
      error: undefined,
      exists: false,
    },
  },
};

export const ErrorTooShort: Story = {
  args: {
    usernameField: {
      value: "sh",
      error: undefined,
    },
    validation: {
      status: "invalid",
      error: {
        name: "Error",
        message: "Username must be at least 3 characters",
      },
      exists: false,
    },
    error: { name: "Error", message: "Username must be at least 3 characters" },
  },
};

export const ErrorSpecialCharacter: Story = {
  args: {
    usernameField: {
      value: "shin_obi",
      error: undefined,
    },
    validation: {
      status: "invalid",
      exists: false,
    },
    error: {
      name: "Error",
      message: "Username can only contain letters, numbers, and hyphens",
    },
  },
};

export const ErrorTimeout: Story = {
  args: {
    usernameField: {
      value: "",
      error: undefined,
    },
    validation: {
      status: "invalid",
      error: undefined,
      exists: false,
    },
    error: {
      name: "Error",
      message: "The operation either timed out or was not allowed",
    },
  },
};

// Story demonstrating autoFocus prop
export const WithAutoFocus: Story = {
  args: {
    autoFocus: true,
    usernameField: {
      value: "",
      error: undefined,
    },
    validation: {
      status: "idle",
      error: undefined,
      exists: undefined,
    },
    error: undefined,
    isLoading: false,
    onUsernameChange: fn(),
    onUsernameFocus: fn(),
    onUsernameClear: fn(),
    onKeyDown: fn(),
  },
};

export const LongError: Story = {
  args: {
    usernameField: {
      value: "",
      error: undefined,
    },
    validation: {
      status: "invalid",
      error: undefined,
      exists: false,
    },
    error: {
      name: "ClientError",
      message:
        'rpc error: code = Internal desc = internal server error: {"response":{"errors":[{"message":"rpc error: code = Internal desc = internal server error","path":["finalizeRegistration"]}],"data":null,"status":200,"headers":{}},"request":{"query":"\\n mutation FinalizeRegistration($credentials: String!, $network: String!) {\\n finalizeRegistration(credentials: $credentials, network: $network) {\\n username\\n controllers {\\n edges {\\n node {\\n address\\n constructorCalldata\\n signers {\\n type\\n }\\n }\\n }\\n }\\n credentials {\\n webauthn {\\n id\\n publicKey\\n }\\n }\\n }\\n}\\n ","variables":{"network":"SN_MAIN","credentials":"{\\"id\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"rawId\\":\\"ctfWh3FE96w5AZ-6iVNAv16ccGqJeDROaJ8YUdnOzZ0\\",\\"type\\":\\"public-key\\",\\"response\\":{\\"attestationObject\\":\\"o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAALU5dmZIhaprzr_lImKkOaIAIHLX1odxRPesOQGfuolTQL9enHBqiXg0TmifGFHZzs2dpQECAyYgASFYIPx2O3ufZDxJ_fuu43knH7H4wfxp61JCg_TZey2CLwzIIlggygpmiDxx0Da84LP2vRu6xDJQrI552vP7Fo9bkIXkXtA\\",\\"clientDataJSON\\":\\"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoib2NZZ2Q5LUlTY3B4U2dGeTZwcEZfSE5rdm1hWVRkZGtyb',
    },
  },
};
