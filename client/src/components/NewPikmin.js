import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

class NewPikmin extends Component {
  state = {
    pikminId: '',
    imageUrl: '',
    pikminName: '',
    type: '',
    level: '',
    weakness: ''
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
      <div>

        <NavBar />
        {this.state.users.map((user) => (
          <div key={user._id}>
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        ))}

        <h3>Create A New Pikmin! </h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="imageUrl">imageUrl: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPikmin.imageUrl}
              type="text"
              name="imageUrl"
            />
          </div>


          <div>
            <label htmlFor="pikminName">New Pikmin's Name: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPikmin.pikminName}
              type="text"
              name="pikminName"
            />
          </div>


          <div>
            <label htmlFor="type">Pikmin Type: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPikmin.type}
              type="text"
              name="type"
            />
          </div>



          <div>
            <label htmlFor="level">Pikmin Level: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPikmin.level}
              type="text"
              name="level"
            />
          </div>



          <div>
            <label htmlFor="weakness">Pikmin Weakness: </label>
            <input
              onChange={this.handleChange}
              value={this.state.newPikmin.weakness}
              type="text"
              name="weakness"
            />
          </div>

          <button type="submit">Create New Pikmin</button>
        </form>
      </div>
    );
  }
}

export default NewPikmin;