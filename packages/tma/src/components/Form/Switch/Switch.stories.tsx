import type { Meta, StoryObj } from "@storybook/react";

import { Cell } from "@/components/blocks/Cell";
import { Placeholder } from "@/components/blocks/Placeholder";
import { Switch } from ".";

const meta = {
  title: "Form/Switch",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=checkbox, see usage example on the With Cell page">
      <div style={{ display: "flex", gap: "6px" }}>
        <Switch {...args} /> <br />
        <Switch defaultChecked {...args} /> <br />
        <Switch disabled {...args} /> <br />
        <Switch disabled checked {...args} /> <br />
      </div>
    </Placeholder>
  ),
} satisfies Story;

export const WithCell: Story = {
  render: (args) => (
    <Cell
      Component="label"
      after={<Switch defaultChecked {...args} />}
      description="Pass Component='label' to Cell to make it clickable."
      multiline
    >
      First radio
    </Cell>
  ),
} satisfies Story;
