import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Character from 'Character/pages/Character/Character';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/character/:id">
          <Character/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
