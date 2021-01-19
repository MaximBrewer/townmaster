import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import ForgotPassword from '../pages/auth/forgot-password';
import ResetPassword from '../pages/auth/reset-password';
import NotFound from '../pages/404';
import Personal from "../pages/Personal.js";
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import { useAuth } from '../context/auth';
import FullPageSpinner from '../components/full-page-spinner';

function App () {
  let { initializing } = useAuth();
  return (
    initializing
      ? <FullPageSpinner />
      : <Router>
        <div className="flex flex-col min-h-screen">
          <Switch>
            <GuestRoute exact path="/" component={Home}/>
            <GuestRoute path="/register" component={Register}/>
            <GuestRoute path="/login" component={Login}/>
            <GuestRoute path="/forgot-password" component={ForgotPassword}/>
            <GuestRoute path="/password/reset/:token" component={ResetPassword}/>
            <AuthRoute path="/personal" component={Personal}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
