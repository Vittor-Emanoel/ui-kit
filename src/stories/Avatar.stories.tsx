import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/Vittor-Emanoel.png" />
      <AvatarFallback>VE</AvatarFallback>
    </Avatar>
  ),
};
