import React from 'react';
import { withRouter } from 'Base/stories/withRouter';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { LoadingPage } from './LoadingPage';

export default {
  title: 'LoadingPage',
  component: LoadingPage,
  decorators: [
    withRouter,
    (story: any) => <MobileDisplay>{story()}</MobileDisplay>,
  ]
}

export const Default = () => (
  <LoadingPage />
);