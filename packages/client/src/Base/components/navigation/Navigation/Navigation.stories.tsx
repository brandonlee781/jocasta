import React from 'react';
import { Navigation } from './Navigation';
import { withRouter } from 'Base/stories/withRouter';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [withRouter]
}

export const Default = () => <Navigation/>;