import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NavBar from './NavBar'

// Need info about a user
// Need info about that users pikmins

const PikminStyles = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #f1faee;
  margin: 10px 0;
  button {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  input,
  textarea {
    background-color: transparent;
    border: none;
  }

  input {
    height: 30%;
    font-size: 1.3rem;
  }
  textarea {
    height: 70%;
  }
`

const NewPikminButton = styled.button`
  background: #1d3557;
  color: white;
  font-size: 1.3rem;
  padding: 7.5px 5px;
`

const PikminsContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: flex-start;
`

class UserPage extends Component {
  state = {
    user: {},
    pikmins: []
  }

  

  componentDidMount() {
    // make an api call to get one single user
    // On the server URL is '/api/users/:userId'
    const userId = this.props.match.params.userId
    axios.get(`/api/users/${userId}`).then(res => {
      console.log(res.data)
      this.setState({
        user: res.data,
        pikmins: res.data.pikmins
      })
    })
  }

  handleCreateNewPikmin = () => {
    const userId = this.props.match.params.userId
    const payload = {
      title: 'Pikmin Title',
      description: 'Pikmin Description'
    }
    axios.post(`/api/users/${userId}/pikmins`, payload).then(res => {
      const newPikmin = res.data
      const newStatePikmins = [...this.state.pikmins, newPikmin]
      this.setState({ pikmins: newStatePikmins })
    })
  }

  handleDelete = pikminId => {
    // some unique value
    axios.delete(`/api/pikmins/${pikminId}`).then(() => {
      //Remove the pikmin with pikminID from this.state.pikmins
      const newPikmins = [...this.state.pikmins]
      // Return only pikmins that are NOT the id provided
      const filtered = newPikmins.filter(pikmin => {
        return pikmin._id !== pikminId // ! = =
      })
      // Take filtered data and set it to pikmins
      this.setState({pikmins: filtered})
    })
  }

  handleChange = (event, pikminId) => {
    // const name = event.target.name
    // const value = event.target.value
    const { value, name } = event.target
    const newPikmins = [...this.state.pikmins]
    const updatedVals = newPikmins.map(pikmin => {
      if (pikmin._id === pikminId){
        pikmin[name] = value
      }
      return pikmin
    }) 

    this.setState({pikmins: updatedVals})
  }

  handleUpdate = (pikminId) => {
    // Find the individual updated pikmin from this.state.pikmins
    const pikminToUpdate = this.state.pikmins.find(pikmin => {
      return pikmin._id === pikminId
    })
    // axios post the endpoint with updated data
    axios.patch(`/api/pikmins/${pikminId}`, pikminToUpdate).then(() => {
      console.log("Updated Pikmin")  
    })
    // console .log saved
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Welcome {this.state.user.username}</h1>
        <NewPikminButton onClick={this.handleCreateNewPikmin}>
          New Pikmin
        </NewPikminButton>
        <PikminsContainerStyle>
          {this.state.pikmins.map(pikmin => {
            const deletePikmin = () => {
              return this.handleDelete(pikmin._id)
            }

            return (
              <PikminStyles>
                <input 
                  onBlur={() => this.handleUpdate(pikmin._id)}
                  onChange={(event) => this.handleChange(event, pikmin._id)} 
                  type="text" name="title" 
                  value={pikmin.title} 
                />
                <textarea 
                  onBlur={() => this.handleUpdate(pikmin._id)}
                  onChange={(event) => this.handleChange(event, pikmin._id)} 
                  name="description" 
                  value={pikmin.description} 
                />
                <button onClick={deletePikmin}>X</button>
              </PikminStyles>
            )
          })}
        </PikminsContainerStyle>
      </div>
    )
  }
}

export default UserPage