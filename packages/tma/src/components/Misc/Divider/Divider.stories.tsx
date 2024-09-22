import type { Meta, StoryObj } from "@storybook/react";

import { Cell } from "@/components/blocks/Cell";
import { List } from "@/components/blocks/List";
import { Divider } from ".";

const meta = {
  title: "Misc/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <List
      style={{ padding: 16, background: "var(--tgui--secondary_bg_color)" }}
    >
      <div style={{ background: "var(--tgui--bg_color)" }}>
        <Cell>Divider is under</Cell>
        <Divider {...args} />
        <Cell>Divider is above</Cell>
      </div>
    </List>
  ),
} satisfies Story;
