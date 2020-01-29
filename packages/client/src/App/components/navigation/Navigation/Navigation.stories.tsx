import React from 'react';
import { withRouter } from 'App/stories/withRouter';
import { Navigation } from './Navigation';

export default {
  title: 'App/Navigation/Navigation',
  component: Navigation,
  decorators: [withRouter]
}

export const Default = () => <Navigation/>;