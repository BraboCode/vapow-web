import Home from 'components/views/home/HomeView';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
);

const WrappedAppRouter = () => (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);

export default WrappedAppRouter;
