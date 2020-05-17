import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    defaultViewport: 'responsive',
    viewports: INITIAL_VIEWPORTS,
  },
});
