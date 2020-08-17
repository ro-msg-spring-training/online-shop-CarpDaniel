import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './homePage/Home'
import EventList from "./eventListPage/listSection/EventListSmart";
import { Container } from '@material-ui/core';
import Header from './Header';

// The Main component renders one of the three provided
// Routes (provided that one matches). The /events
// route will match any pathname that starts
// with /events. The / route will only match
// when the pathname is exactly the string "/"
//TODO: i18n for all story admin page
const Main = () => (
    <Container>
        <Header></Header>
        <Switch>
            <Route exact path='/admin' component={Home}/>
            <Route exact path='/admin/events' component={EventList}/>
        </Switch>
    </Container>
)

export default Main
