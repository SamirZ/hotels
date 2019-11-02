import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './global-style';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Main from './pages/main';

import requireAuth from './utils/requireAuth';
import requireNoAuth from './utils/requireNoAuth';

//Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelDetails from './pages/hotel-details';


function App() {

  // TODO: create wrapper route to make history available

  return (
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route path="/signin" exact component={requireNoAuth(SignIn)} />
            <Route path="/signup" exact component={requireNoAuth(SignUp)} />
            <Route path="/hotel/:id" component={requireAuth(HotelDetails)} />
            <Route path="/" component={requireAuth(Main)} />
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
