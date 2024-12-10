import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn) => {
  console.log('StyleDecorator:');

  return (
    <div>
      <Story /> {/* Вызываем Story как компонент */}
    </div>
  );
};
