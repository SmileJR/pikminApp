import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #0D8E47, #155E37, #072C13);
  height: 60px;
  
  
  a {
    text-decoration: none;
    padding-left: 10px;
    color: #DBD5C0;
    &:active {
      color: red;
    }
  }
  .navbar {
    width: 15vw;
    display: flex;
    justify-content: space-between;
  }
  // .logo {
  //   width: 15vw;
  //   display: flex;
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarStyles id="nav-container" class="some-class">
        <Link to="/">Home Page</Link>
        {/* <div className="navbar"> */}
          <Link to="/SignUp">Login</Link>
          <div className="logo"><img height="100" src="https://vignette.wikia.nocookie.net/logopedia/images/5/5f/Pikmin_logo.png/revision/latest?cb=20120612125928"/>
        </div>
        {/* </div> */}
        
      </NavBarStyles>
    );
  }
}

export default NavBar;