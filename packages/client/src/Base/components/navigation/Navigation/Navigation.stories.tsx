import React from 'react';
import { withRouter } from 'Base/stories/withRouter';
import { Navigation } from './Navigation';

export default {
  title: 'Base/Navigation/Navigation',
  component: Navigation,
  decorators: [withRouter]
}

export const Default = () => <Navigation/>;