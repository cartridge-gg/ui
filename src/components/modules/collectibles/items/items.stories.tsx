import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleItems } from "./items";
import { CollectibleItem } from "@/index";
import { fn } from "@storybook/test";

const meta: Meta<typeof CollectibleItems> = {
  title: "Modules/Collectibles/Items",
  component: CollectibleItems,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CollectibleItems>;

export const Default: Story = {
  render: function Render() {
    return (
      <CollectibleItems className="">
        <CollectibleItem
          owner="shinobi"
          quantity={1}
          action="list"
          onActionPress={fn()}
        />
        <CollectibleItem
          owner="yourwurstknightmare"
          quantity={1}
          price="$24"
          expiration="1mo"
          action="unlist"
          onActionPress={fn()}
        />
        <CollectibleItem
          owner="shinobi"
          quantity={1}
          price="$24"
          expiration="1mo"
          action="purchase"
          onActionPress={fn()}
        />
      </CollectibleItems>
    );
  },
};
