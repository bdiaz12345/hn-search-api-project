import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HistoryScreen from './components/HistoryScreen'
import LandingScreen from './components/LandingScreen'
import SearchScreen from './components/SearchScreen'

// react-router is used to view different components depending on the path of the route

const App = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <LandingScreen />
            </Route>
            <Route path='/search'>
                <SearchScreen />
            </Route>
            <Route path='/history'>
                <HistoryScreen />
            </Route>
        </Switch>
    )
}

export default App