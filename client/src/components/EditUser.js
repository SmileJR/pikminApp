import React, { Component } from 'react';
import axios from "axios";
class EditUser extends Component {
    state = {
        users: [],
        newUser: {
          username: "",
          password: ""
        }
      };
    componentDidMount() {
        // make an api call to get one single user
        // On the server URL is '/api/users/:userId'
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`).then(res => {
          console.log(res.data)
          this.setState({ user: res.data })
        })
      }
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
          const userId = this.props.match.params.userId
        // make post request to our api to create new user
        axios.patch(`/api/users/${userId}`, this.state.newUser)
          .then(res => {
            this.props.history.push(`/SignUp`)
          })
          .catch(err => {
            console.log(err);
          });
        // when we get that data back, we need to navigate to the new users page
      };
    render() {
        return (
            
            <div>
                <h1>Edit Your Profile Login</h1>
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
                    
          <button type="submit">Edit User</button>
        </form>
            </div>
        );
    }
}

export default EditUser;