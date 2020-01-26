import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'Base/Loading/LoadingSpinner',
  component: LoadingSpinner,
}

export const Default = () => (
  <LoadingSpinner />
);

export const Big = () => (
  <LoadingSpinner height={300} width={300} />
);

export const Small = () => (
  <LoadingSpinner height={32} width={32} />
);