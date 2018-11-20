import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

class NewPikmin extends Component {
  state = {
    pikmins: [],
    newPikmin: {
    pikminId: '',
    imageUrl: '',
    pikminName: '',
    type: '',
    level: '',
    weakness: ''
    }
  };

  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const updatedNewPikmin = { ...this.state.newPikmin };
    // event target name wil be either 'username or password'
    updatedNewPikmin[event.target.pikminName] = event.target.value;
    this.setState({ newPikmin: updatedNewPikmin });
  };
  handleSubmit = event => {
    event.preventDefault();
    // make post request to our api to create new user
    axios.post("/api/pikmins", this.state.newUser)
      .then(res => {
        this.props.history.push(`/pikmins/${res.data._id}`)
      })
      .catch(err => {
        console.log(err);
      });
    // when we get that data back, we need to navigate to the new users page
  };

  getAllPikmins = () => {
    axios.get("/api/pikmins").then(res => {
      this.setState({ users: res.data });
    });
  };

  componentDidMount() {
    this.getAllPikmins();
  }

  render() {
    return (
      <div>

        <NavBar />
        {this.state.pikmins.map((pikmin) => (
          <div key={pikmin._id}>
            <Link to={`/pikmins/${pikmin._id}`}>{pikmin.pikminName}</Link>
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