import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const CompWithRouter = ({ children }: PropsWithChildren<{}>) =>
  <BrowserRouter>{ children }</BrowserRouter>;

export const withRouter = (storyFn: any) => <CompWithRouter>{ storyFn() }</CompWithRouter>;