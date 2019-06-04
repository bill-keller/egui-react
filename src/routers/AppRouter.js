import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DeviceDashboardPage from '../components/DeviceDashboardPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import DeviceDetailFullPage from '../components/DeviceDetailFullPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>

    <div>
      <Switch>
        <PublicRoute path="/" component= {LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component= {DeviceDashboardPage} exact={true}/>
        <PrivateRoute path="/dashboardExpenses" component= {ExpenseDashboardPage} />
        <PrivateRoute path="/create" component= {AddExpensePage} /> 
        <PrivateRoute path="/devices/:id" component= {DeviceDetailFullPage} />
        <PrivateRoute path="/edit/:id" component= {EditExpensePage} />
        <Route component= {NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;