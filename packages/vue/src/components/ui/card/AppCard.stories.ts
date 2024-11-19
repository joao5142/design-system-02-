import type { Meta, StoryObj } from "@storybook/vue3";
import AppCard from "./AppCard.vue";
import { ColorValues } from "@can-i-helpu-ds/tokens";

const meta = {
  title: "General/Card",
  component: AppCard,
  tags: ["autodocs"],

  args: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { AppCard },
    setup() {
      return { args };
    },
    template: `
      <AppCard  v-bind="args" >      
         Card teste
      </AppCard>
    `,
  }),
};