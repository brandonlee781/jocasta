import React from 'react';
import { action } from '@storybook/addon-actions';
import { CountInput } from './CountInput';

export default {
  title: 'Base/CountInput',
  component: CountInput,
}

export const Default = () => (
  <div style={{ maxWidth: '90px' }}>
    <CountInput
      increase={action('Add 1')}
      decrease={action('Remove 1')}
    />
  </div>
);