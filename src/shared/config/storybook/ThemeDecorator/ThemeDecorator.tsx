import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  console.log('theme ->>>>>>>>>', theme);

  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  ); 
}