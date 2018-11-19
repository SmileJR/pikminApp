import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

class Pikmin extends Component {
  state = {
    pikminName: '',
      type: ''
  }

  componentDidMount(){
    const initialState = {
      _id: this.props.pikmin._id,
      title: this.props.pikmin.title,
      description: this.props.pikmin.description
    }

    this.setState(initialState)
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({[name]: value})
  }


  handleDelete = () => {
    axios.delete(`/api/pikmins/${this.state._id}`).then(() => {
      this.props.getAllPikmins()
    })
  }

  handleUpdate = () => {
    axios.patch(`/api/pikmins/${this.state._id}`, this.state).then(() => {
      console.log("Updated Pikmins")  
    })  
  }

  render() {
    return (
      <PikminStyles>
        <input onBlur={this.handleUpdate}
          onChange={this.handleChange}
          type="text" name="title"
          value={this.state.title}
        />
        <textarea onBlur={this.handleUpdate}
          onChange={this.handleChange}
          name="description" value={this.state.description}
        />
        <button onClick={this.handleDelete}>X</button>
      </PikminStyles>
    )
  }
}

export default Pikmin
