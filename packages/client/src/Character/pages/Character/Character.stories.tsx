import React from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from 'client';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import Character from './Character';

export default {
  title: 'Character/CharacterPage',
  component: Character,
  decorators: [
    (story: any) => (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MobileDisplay>{story()}</MobileDisplay>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    )
  ],
}

export const Default = () => (
  <Character />
);