import { Icon28Heart } from "@/icons/28/heart";
import { hideControls } from "@/storybook/controls";
import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "@/components/blocks/Section";
import { Rating } from ".";

const meta = {
  title: "Form/Rating",
  component: Rating,
  argTypes: hideControls("IconContainer"),
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Section
      header="Navigate with tabs!"
      footer="Use the keyboard to navigate between the stars and also click on them"
    >
      <Rating {...args} />
    </Section>
  ),
} satisfies Story;

export const CustomIcon: Story = {
  render: (args) => (
    <Section header="We use custom icon here">
      <Rating IconContainer={Icon28Heart} {...args} />
    </Section>
  ),
} satisfies Story;
