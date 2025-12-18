import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleCard } from ".";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta: Meta<typeof CollectibleCard> = {
  title: "Modules/Collectibles/Card",
  component: CollectibleCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    images: [
      "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
    ],
    title: "Beasts",
    selected: false,
    onSelect: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof CollectibleCard>;

export const Default: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          totalCount={1}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Selectable: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          totalCount={2}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={() => setSelected(!selected)}
          price="$2"
        />
      </div>
    );
  },
};

export const Beast: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x0158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x158160018d590d93528995b340260e65aedd76d28a686e9daa5c4e8fad0c5dd/0x0000000000000000000000000000000000000000000000000000000000000001/image",
          ]}
          totalCount={1}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Karat: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x07d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x7d8ea58612a5de25f29281199a4fc1f2ce42f0f207f93c3a35280605f3b8e68/0x0000000000000000000000000000000000000000000000000000000000000001/image",
          ]}
          totalCount={1}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const GoldenToken: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x04f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-main/torii/static/0x4f5e296c805126637552cf3930e857f380e7c078e8f00696de4fc8545356b1d/0x0000000000000000000000000000000000000000000000000000000000000001/image",
          ]}
          totalCount={1}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Bloberts: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x0539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image",
            "https://api.cartridge.gg/x/arcade-ponziland-nft/torii/static/0x539f522b29ae9251dbf7443c7a950cf260372e69efab3710a11bf17a9599f1/0x0000000000000000000000000000000000000000000000000000000000000001/image",
          ]}
          totalCount={1}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Duelists: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x2e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c/0x0000000000000000000000000000000000000000000000000000000000000001/image",
          ]}
          totalCount={1}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Fallback: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState(false);

    return (
      <div className="flex gap-2">
        <CollectibleCard
          {...args}
          images={[
            "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image",
            "https://api.cartridge.gg/x/arcade-pistols/torii/static/0x7aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f/0x0000000000000000000000000000000000000000000000000000000000000577/image",
          ]}
          totalCount={1}
          selectable={true}
          selected={selected}
          onSelect={() => setSelected(!selected)}
          onClick={selected ? () => setSelected(!selected) : undefined}
        />
      </div>
    );
  },
};

export const Unselectable: Story = {
  args: {
    selectable: false,
    totalCount: 2,
    listingCount: 1,
  },
};

export const Faded: Story = {
  args: {
    variant: "faded",
    totalCount: 2,
    listingCount: 2,
    price: "$2",
    lastSale: "$2",
  },
};

export const Selected: Story = {
  args: {
    selectable: true,
    selected: true,
  },
};

export const Unselected: Story = {
  args: {
    selectable: true,
    selected: false,
  },
};

export const Icon: Story = {
  args: {
    icon: "",
    selected: false,
    price: "$2",
    lastSale: "$2",
    totalCount: 2,
    listingCount: 1,
  },
};

export const Price: Story = {
  args: {
    selected: false,
    price: "$2",
    lastSale: "",
  },
};

export const LastSale: Story = {
  args: {
    selected: false,
    price: "",
    lastSale: "$2",
  },
};

export const PriceLastSale: Story = {
  args: {
    selected: false,
    price: {
      value: "100",
      image:
        "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
    },
    lastSale: {
      value: "90",
      image:
        "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo",
    },
  },
};

export const FooterForced: Story = {
  args: {
    selected: false,
    price: null,
    lastSale: null,
  },
};
