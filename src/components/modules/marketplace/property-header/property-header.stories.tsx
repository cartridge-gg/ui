import type { Meta, StoryObj } from "@storybook/react";
import { PropertyHeader } from "./property-header";
import { PropertyFilter } from "@/index";
import { PropertySearch } from "../property-search";
import { useState } from "react";

const meta: Meta<typeof PropertyHeader> = {
  title: "Modules/Marketplace/Property Header",
  component: PropertyHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    label: "Name",
    count: 17,
  },
};

export default meta;
type Story = StoryObj<typeof PropertyHeader>;

export const Default: Story = {
  render: function Render(args) {
    const [search, setSearch] = useState<string>("");

    return (
      <PropertyHeader {...args}>
        <PropertySearch
          variant="darkest"
          search={search}
          setSearch={setSearch}
        />
        <div className="flex flex-col gap-px">
          <PropertyFilter label="Property Name" count={100} />
          <PropertyFilter label="Property Name" count={100} />
          <PropertyFilter label="Property Name" count={100} />
          <PropertyFilter label="Property Name" count={100} />
          <PropertyFilter label="Property Name" count={100} />
        </div>
      </PropertyHeader>
    );
  },
};
