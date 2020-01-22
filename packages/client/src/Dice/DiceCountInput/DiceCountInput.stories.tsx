import React from 'react';
import { ReactComponent as BoostIcon } from 'assets/svg/dice/boost.svg';
import { action } from '@storybook/addon-actions';
import { DiceCountInput } from './DiceCountInput';

export default {
  title: 'DiceCountInput',
  component: DiceCountInput,
}

export const Default = () => (
  <DiceCountInput
    label="Boost"
    die={<BoostIcon />}
    add={action('Add 1 Boost')}
    remove={action('Remove 1 Boost')}
  />
);