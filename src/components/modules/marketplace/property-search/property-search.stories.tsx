import type { Meta, StoryObj } from "@storybook/react";
import { PropertySearch } from "./property-search";
import { useState } from "react";

const meta: Meta<typeof PropertySearch> = {
  title: "Modules/Marketplace/Property Search",
  component: PropertySearch,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    search: "Loot",
  },
};

export default meta;
type Story = StoryObj<typeof PropertySearch>;

export const Darkest: Story = {
  render: function Render(args) {
    const [search, setSearch] = useState<string>(args.search || "");

    return (
      <div className="flex gap-2">
        <PropertySearch
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
        <PropertySearch
          variant="darker"
          search={search}
          setSearch={setSearch}
        />
      </div>
    );
  },
};
