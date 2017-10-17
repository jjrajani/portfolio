import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import * as c from './components';

const routes = [
    { path: '/home', component: c.Home },
    { path: '/resume', component: c.Resume },
    { path: '/projects', component: c.Projects },
    { path: '/project/:projectName', component: c.Detail },
    { path: '/contact', component: c.Contact },
    { path: '/collaborate', component: c.Collaborate }
];

const Routes = () =>
    <Router>
        <div id="app">
            <c.Header />
            <Switch>
                <Redirect exact from={'/'} to={'/home'} />
                <Redirect from={'/portfolio'} to={'/home'} />
                {routes.map((r, i) => {
                    return (
                        <Route
                            key={`${i}-${r.path}`}
                            exact
                            path={r.path}
                            component={r.component}
                        />
                    );
                })}
            </Switch>
            <c.Footer />
        </div>
    </Router>;

export default Routes;
