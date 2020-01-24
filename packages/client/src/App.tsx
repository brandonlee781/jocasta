import React from 'react';
import { createMuiTheme, Drawer, ThemeProvider, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { InitialState, RootDispatcher } from 'store/root-reducer';

import Character from 'Character/pages/Character/Character';
import DarkModeIcon from '@material-ui/icons/Brightness4';
import './App.css';

interface StateProps {
  menu: boolean;
  darkMode: boolean;
}

const App: React.FC = () => {
  const { menu, darkMode } = useSelector<InitialState, StateProps>((state) => ({
    menu: state.menuOpen,
    darkMode: state.darkMode,
  }));
  const dispatch = useDispatch();
  const { toggleMenu, toggleDarkMode } = new RootDispatcher(dispatch);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      text: {
        secondary: '#DADADA'
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ background: '#424242' }}>
        <Switch>
          <Route path="/character/:id" component={Character} />
        </Switch>

        <Drawer open={menu} onClose={() => toggleMenu()}>
          <IconButton onClick={toggleDarkMode}>
            <DarkModeIcon/>
          </IconButton>
        </Drawer>
      </div>
    </ThemeProvider>
  );
}

export default App;
