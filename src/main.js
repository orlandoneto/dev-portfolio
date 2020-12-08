import React from 'react';

import Home from './components/home/Home';
import { Container } from 'react-materialize';

import { Switch, Route } from 'react-router-dom'
import Contact from './components/contact/Contact';

function Main() {
    return (
        <main>
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/contact' component={Contact} />
                </Switch>
            </Container>
        </main>
    )
}

export default Main;