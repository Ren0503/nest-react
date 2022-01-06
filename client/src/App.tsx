import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Router } from 'react-router-dom';
import api from 'src/utils/api';
import history from 'src/utils/history';
import Routes from './routes';
import GlobalStyles from 'src/styles/global';
const App = () => {
    return (
        <ApolloProvider client={api}>
            <Router history={history}>
                <GlobalStyles />
                <Routes />
            </Router>
        </ApolloProvider>
    );
};

export default App;
