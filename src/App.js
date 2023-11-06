import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import User from './user/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from "./places/pages/UserPlaces";

function App() {
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route path='/' exact><User/></Route>
                    <Route path='/:userId/places'><UserPlaces/></Route>
                    <Route path="/places/new" exact><NewPlace/></Route>
                    <Redirect to='/'/>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
