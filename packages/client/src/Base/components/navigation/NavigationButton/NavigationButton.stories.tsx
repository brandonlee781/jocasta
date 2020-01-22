import React from 'react';
import { NavigationButton } from './NavigationButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { withRouter } from 'Base/stories/withRouter';

export default {
  title: 'NavigationButton',
  component: NavigationButton,
  decorators: [withRouter],
}

export const Inactive = () => (
  <NavigationButton to="/asdfasdfasdfaf">
    <FavoriteBorderIcon/>
    Stats
  </NavigationButton>
);
export const Active = () => (
  <NavigationButton to="/">
    <FavoriteBorderIcon/>
    Stats
  </NavigationButton>
);