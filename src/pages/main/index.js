import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import Dashboard from './pages/dashboard';
import Favorites from './pages/favorites';
import { logoutAction } from '../../store/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Main = ({ logoutAction }) => {
    return (
        <React.Fragment>
            <Header email={'username@gmail.com'} logoutAction={logoutAction} />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/favorites" component={Favorites} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default connect(
    state => ({
      token: state.auth.token
    }), { logoutAction }
  )(Main);
