import React, { Component } from 'react';
import IndivPik from './IndivPik'
import SignUp from './SignUp'


class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Hello From the HomePage</h1>
                <h2>This is the signup area</h2>
                <SignUp />
                <IndivPik />
            </div>
        );
    }
}

export default HomePage;