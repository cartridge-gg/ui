import type { Meta, StoryObj } from "@storybook/react";
import {
  ActivityCard,
  ActivityAchievementCard,
  ActivityGameCard,
  ActivityTokenCard,
  ActivityCollectibleCard,
} from "./";

const meta: Meta<typeof ActivityCard> = {
  title: "Modules/Activities/Card",
  component: ActivityCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ActivityCard>;

const now = new Date().getTime();
const seconds_away = now - 10 * 1000;
const minutes_away = now - 60 * 1000;
const hours_away = now - 60 * 60 * 1000;
const days_away = now - 24 * 60 * 60 * 1000;
const weeks_away = now - 2 * 7 * 24 * 60 * 60 * 1000;
const months_away = now - 5 * 30 * 24 * 60 * 60 * 1000;

const LS_LOGO =
  "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png";
const LORDS_LOGO =
  "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo";
const LS_COVER =
  "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png";
const PISTOLS_LOGO =
  "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/pistols/icon.png";
const FOOLS_LOGO = "https://assets.underware.gg/pistols/fools.svg";

export const Game: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ActivityGameCard
        title="Attack"
        website="https://lootsurvivor.io"
        image={LS_LOGO}
        timestamp={seconds_away}
      />
      <ActivityGameCard
        title="Attack"
        website="https://lootsurvivor.io"
        image={LS_LOGO}
        timestamp={minutes_away}
        certified
      />
      <ActivityGameCard
        title="Attack"
        website="https://lootsurvivor.io"
        image={LS_LOGO}
        timestamp={hours_away}
        loading
      />
      <ActivityGameCard
        title="Attack"
        website="https://lootsurvivor.io"
        image={LS_LOGO}
        timestamp={days_away}
        error
      />
    </div>
  ),
};

export const Achievement: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ActivityAchievementCard
        title="Achievement"
        website="https://lootsurvivor.io"
        topic="Squire"
        points={20}
        image="fa-seedling"
        timestamp={seconds_away}
      />
      <ActivityAchievementCard
        title="Achievement"
        website="https://lootsurvivor.io"
        topic="Squire"
        points={20}
        image="fa-seedling"
        timestamp={seconds_away}
        certified
      />
      <ActivityAchievementCard
        title="Achievement"
        website="https://lootsurvivor.io"
        topic="Squire"
        points={20}
        image="fa-seedling"
        timestamp={days_away}
        loading
      />
      <ActivityAchievementCard
        title="Achievement"
        website="https://lootsurvivor.io"
        topic="Squire"
        points={20}
        image="fa-seedling"
        timestamp={days_away}
        error
      />
    </div>
  ),
};

export const Token: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        username="clicksave"
        amount="100"
        value="$6.04"
        image={LORDS_LOGO}
        action="send"
        timestamp={seconds_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        username="reciprodancer"
        amount="100"
        value="$6.04"
        image={LORDS_LOGO}
        action="receive"
        timestamp={minutes_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        amount="100"
        value="$6.04"
        symbol="BEADS"
        image={undefined}
        action="receive"
        timestamp={hours_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        amount="100"
        value="$6.04"
        image={FOOLS_LOGO}
        logo={PISTOLS_LOGO}
        action="mint"
        timestamp={days_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        username="reciprodancer"
        amount="100"
        value="$6.04"
        image={FOOLS_LOGO}
        logo={PISTOLS_LOGO}
        action="send"
        timestamp={weeks_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        amount="100"
        value="$6.04"
        image={FOOLS_LOGO}
        logo={PISTOLS_LOGO}
        action="receive"
        timestamp={months_away}
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        amount="100"
        value="$6.04"
        image={LORDS_LOGO}
        action="receive"
        timestamp={minutes_away}
        error
      />
      <ActivityTokenCard
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        amount="100"
        value="$6.04"
        image={LORDS_LOGO}
        action="send"
        timestamp={seconds_away}
        loading
      />
    </div>
  ),
};

export const Collectible: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ActivityCollectibleCard
        name="Onyx Bane Ogre"
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        collection="Beast"
        image={LS_COVER}
        action="receive"
        timestamp={seconds_away}
      />
      <ActivityCollectibleCard
        name="Onyx Bane Ogre"
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        collection="Beast"
        image={LS_COVER}
        action="send"
        timestamp={seconds_away}
      />
      <ActivityCollectibleCard
        name="Onyx Bane Ogre"
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        collection="Beast"
        image={LS_COVER}
        action="mint"
        timestamp={seconds_away}
      />
      <ActivityCollectibleCard
        name="Onyx Bane Ogre"
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        collection="Beast"
        image={LS_COVER}
        action="receive"
        timestamp={seconds_away}
        loading
      />
      <ActivityCollectibleCard
        name="Onyx Bane Ogre"
        address="0x041aad5a7493b75f240f418cb5f052d1a68981af21e813ed0a35e96d3e83123b"
        collection="Beast"
        image={LS_COVER}
        action="receive"
        timestamp={seconds_away}
        error
      />
    </div>
  ),
};
