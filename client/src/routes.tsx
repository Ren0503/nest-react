import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardScreen from 'src/screens/Board';
import HomeScreen from 'src/screens/Home';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/dashboard" component={BoardScreen} />

            <Route path="/" component={() => <h1>404 - Page not found</h1>} />
        </Switch>
    );
}
