import type { Meta, StoryObj } from "@storybook/react";
import { MarketplacePropertySearch } from "./property-search";
import { useState } from "react";

const meta: Meta<typeof MarketplacePropertySearch> = {
  title: "Modules/Marketplace/Property Search",
  component: MarketplacePropertySearch,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    search: "Loot",
  },
};

export default meta;
type Story = StoryObj<typeof MarketplacePropertySearch>;

export const Darkest: Story = {
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");

    return (
      <div className="flex gap-2">
        <MarketplacePropertySearch
          variant="darkest"
          search={search}
          setSearch={setSearch}
        />
      </div>
    );
  },
};

export const Darker: Story = {
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");

    return (
      <div className="flex gap-2">
        <MarketplacePropertySearch
          variant="darker"
          search={search}
          setSearch={setSearch}
        />
      </div>
    );
  },
};
