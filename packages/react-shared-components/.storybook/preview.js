import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    defaultViewport: 'responsive',
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    /**
     * A sorting function to control the order of stories in the navigation panel
     * The recommended setup comes from the https://storybook.js.org/docs/configurations/options-parameter/#sorting-stories
     */
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
});
