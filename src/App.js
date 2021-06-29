import { Login } from './pages/Login';
import { Switch, Route } from 'react-router-dom'
import { useState } from 'react';

import './styles/app.scss';
import { Home } from './pages/Home';

function App() {

  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))

  return (
    <Switch>
      {!accessToken ?
        <Route path="*">
          <Login setAccessToken={setAccessToken} />
        </Route>
        :
        <Route path="*">
          <Home accessToken={accessToken} />
        </Route>
      }
    </Switch>
  );
}

export default App;
