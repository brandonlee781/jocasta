import React from 'react';
import { withRouter } from 'App/stories/withRouter';
import { MobileDisplay } from 'App/stories/MobileDisplay';
import { LoadingPage } from './LoadingPage';

export default {
  title: 'App/Loading/LoadingPage',
  component: LoadingPage,
  decorators: [
    withRouter,
    (story: any) => <MobileDisplay>{story()}</MobileDisplay>,
  ]
}

export const Default = () => (
  <LoadingPage />
);