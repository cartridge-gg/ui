import type { Meta, StoryObj } from "@storybook/react";
import { Filters } from "./filters";
import { useCallback, useMemo, useState } from "react";
import { PropertyHeader, PropertySearch, PropertyFilter, RadialItem, MarketplaceHeaderReset, MarketplaceHeader } from "@/index";

const ATTRIBUTES = ["Name", "XP", "Level", "Health", "Gold", "Strength", "Dexterity", "Intelligence", "Vitality", "Wisdom"];
const PROPERTIES = [1, 2, 3, 4, 5];

const meta: Meta<typeof Filters> = {
  title: "Modules/Marketplace/Filters",
  component: Filters,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  render: function Render() {
    const [active, setActive] = useState<number>(0);
    const [search, setSearch] = useState<{ [key: string]: string}>({});
    const [selected, setSelected] = useState<{ [key: string]: boolean}>({});

    const reset = useMemo(() => {
      return Object.values(selected).filter((value) => !!value).length > 0;
    }, [selected]);

    const clear = useCallback(() => {
      setSelected({});
      setSearch({});
    }, []);

    return (
      <Filters>
        <MarketplaceHeader label="Status" />
        <div className="flex flex-col gap-2 w-fit">
          <RadialItem label="Buy Now" active={active === 0} onClick={() => setActive(0)} />
          <RadialItem label="Show All" active={active === 1} onClick={() => setActive(1)} />
        </div>
        <MarketplaceHeader label="Properties">
          {reset && <MarketplaceHeaderReset onClick={clear} />}
        </MarketplaceHeader>
        {ATTRIBUTES.map((label, index) => (
          <PropertyHeader key={index} label={label} count={17}>
            <PropertySearch variant="darkest" search={search[label] || ""} setSearch={(value: string) => setSearch((prev) => ({ ...prev, [label]: value }))} />
            <div className="flex flex-col gap-px">
              {PROPERTIES.filter((i) => `Property ${label} ${i}`.toLowerCase().includes((search[label] || "").toLowerCase())).map((i) => (
                <PropertyFilter
                  key={i}
                  label={`Property ${label} ${i}`}
                  count={100}
                  value={selected[label + i] || false}
                  setValue={(value: boolean) => setSelected((prev) => ({ ...prev, [label + i]: value }))}
                />
              ))}
            </div>
          </PropertyHeader>
        ))}
      </Filters>
    );
  },
};