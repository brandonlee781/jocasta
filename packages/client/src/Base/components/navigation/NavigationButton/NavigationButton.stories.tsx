import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { withRouter } from 'Base/stories/withRouter';
import { NavigationButton } from './NavigationButton';

export default {
  title: 'Base/Navigation/NavigationButton',
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