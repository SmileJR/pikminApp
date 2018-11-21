import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const BackgroundColor = styled.div`
background-color: #0A1B0E;
height: 900px;
color: #DBD5C0;    

`

// TODO: SHOW ALL USERS
// TODO: CREATE FORM TO CREATE USER

class SignUp extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      password: ""
    }
  };

  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const updatedNewUser = { ...this.state.newUser };
    // event target name wil be either 'username or password'
    updatedNewUser[event.target.name] = event.target.value;
    this.setState({ newUser: updatedNewUser });
  };
  handleSubmit = event => {
    event.preventDefault();
    // make post request to our api to create new user
    axios.post("/api/users", this.state.newUser)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
      })
      .catch(err => {
        console.log(err);
      });
    // when we get that data back, we need to navigate to the new users page
  };

  getAllUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <BackgroundColor>
      <div>
        
      <NavBar />
      <h1>Previous Users Login Here:</h1>
        {this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        ))}

        <h1>Don't have a Pikmin Keeper Account?
          <h3>Create one Here:</h3>  </h1>
{/* //once the submit button is clicked the information will be submitted */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.username}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newUser.password}
              type="password"
              name="password"
            />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
      </BackgroundColor>
    );
  }
}

export default SignUp;