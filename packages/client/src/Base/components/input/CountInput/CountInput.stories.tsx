import React from 'react';
import { CountInput } from './CountInput';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CountInput',
  component: CountInput,
}

export const Default = () => (
  <div style={{ maxWidth: '90px' }}>
    <CountInput
      add={action('Add 1')}
      remove={action('Remove 1')}
    />
  </div>
);