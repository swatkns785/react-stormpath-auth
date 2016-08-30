import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Route, browserHistory } from 'react-router'
import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute, HomeRoute } from 'react-stormpath'
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages'

ReactStormpath.init()

ReactDOM.render(
    <Router history={browserHistory}>
        <HomeRoute path="/" component={MasterPage}>
            <IndexRoute component={IndexPage} />
            <LoginRoute component={LoginPage} path="/login" />
            <AuthenticatedRoute component={RegistrationPage} path="/register" />
            <AuthenticatedRoute>
                <HomeRoute component={ProfilePage} path="/profile" />
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);
