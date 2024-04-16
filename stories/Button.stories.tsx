// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/ui/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Green: Story = {
  render: () => <Button color="green">Нажми на меня!</Button>,
};

export const Blue: Story = {
  render: () => <Button color="blue">Нажми на меня!</Button>,
};

export const Disabled: Story = {
  render: () => (
    <Button color="green" disabled>
      Нажми на меня!
    </Button>
  ),
};
