import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { Button } from 'reactstrap';

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
    console.log("value", event.target.value);
    const updatedNewPikmin = { ...this.state.newPikmin };
    // event target name wil be either 'username or password'
    console.log(updatedNewPikmin)
    updatedNewPikmin[event.target.name] = event.target.value;
    this.setState({ newPikmin: updatedNewPikmin });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.match.params.userId)
    // make post request to our api to create new pikmin

    axios.post(`/api/users/${this.props.match.params.userId}/pikmins`, this.state.newPikmin)
    //post this new pikmin to this specific user
      .then(res => {
        this.props.history.push(`/users/${this.props.match.params.userId}`)
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
        {/* {this.state.pikmins.map((pikmin) => (
          <div key={pikmin._id}>
            <Link to={`/pikmins/${pikmin._id}`}>{pikmin.pikminName}</Link>
          </div>
        ))} */}

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

          <Button type="submit" color="primary">primary</Button>
    
        
        </form>
        </div>
    );
  }
}

export default NewPikmin;