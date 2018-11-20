import React, { Component } from 'react';
import NavBar from './NavBar'
import styled from 'styled-components'

const BackgroundColor = styled.div`
background-color: #0A1B0E;
height: 900px;
color: #DBD5C0;    

`
class HomePage extends Component {
    render() {
        return (
            <BackgroundColor>
            <div>
                <NavBar />
                <h1>Pikmin Keeper App</h1>
                <img src="https://uploads.scratch.mit.edu/users/avatars/22133259.png" alt=""/>
                <h3>Do you have too many Pikmin to keep track of? The Pikmin Keeper App is here to help you. Name your Pikmin, document their specs and so much more. Login to see your Pikmin inventory. Keep track of all your Pikmin with just the click of a button!</h3>
            </div>
            </BackgroundColor>
        );
    }
}

export default HomePage;