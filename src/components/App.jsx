import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';

export default class App extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <Exercises />
                <Footer />
            </Fragment>
        );
    }
}