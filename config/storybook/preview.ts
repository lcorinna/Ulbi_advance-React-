import type { Preview } from "@storybook/react";
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorators';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

console.log('Preview Theme:', Theme);

export const preview: Preview = {
  parameters: {
    controls: { 
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.DARK)],
};
