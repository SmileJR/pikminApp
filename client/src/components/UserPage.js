import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Pikmin from './Pikmin'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
// Need info about a user
// Need info about that users ideas

const NewPikminButton = styled.button`
background-image: linear-gradient(-90deg, red, yellow);
  color: white;
  font-size: 2.3rem;
  padding: 7.5px 5px;
`

const PikminsContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class UserPage extends Component {
  //should i use this one?
  state = {
    user: {},
    pikmins: []
  }
  //or this one?  
  // state = {
  //   user: {
  //     pikmins: []
  //   }

  // }


  componentDidMount() {
    this.getAllPikmins()
  }

  getAllPikmins = () => {
    console.log("STUFF")
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.id
    axios.get(`/api/users/${userId}`).then(res => {
      console.log("test", res.data)
      this.setState({
        user: res.data,
        pikmins: res.data.pikmins
      })
    })
  }

  handleCreateNewPikmin = () => {
    const userId = this.props.match.params.userId
    const payload = {
      imageUrl: 'picture',
      pikminName: 'pikmin name',
      type: 'pik type',
      level: 'pik level',
      weakness: 'pik weakness'
    }
    axios.post(`/api/users/${userId}/pikmins`, payload).then(res => {
      const newPikmin = res.data
      const newStatePikmins = [...this.state.pikmins, newPikmin]
      this.setState({ pikmins: newStatePikmins })
    })
  }
  onDelete() {
    let userId = this.state.user._id;
    axios.delete(`http://localhost:3000/api/users/${userId}`)
      .then(response => {
        this.props.history.push('/')
      })
  }
  render() {
    console.log('pikmins', this.state.pikmins)
    return (
      <div>
        <NavBar />

        <button onClick={this.onDelete.bind(this)}>Delete</button>





        <h1>Welcome {this.state.user.username}! This is your Pikmin Page</h1>
        <NewPikminButton onClick={this.handleCreateNewPikmin}>
         <Link to="/newPikmin"> New Pikmin</Link>
        </NewPikminButton>
        <PikminsContainerStyle>
          {this.state.pikmins.map(pikmin => (
            <Pikmin getAllPikmins={this.getAllPikmins} key={pikmin._id} pikmin={pikmin} />
          ))}
        </PikminsContainerStyle>
      </div>
    )
  }
}

export default UserPage
