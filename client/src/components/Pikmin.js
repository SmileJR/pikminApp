import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


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
    imageUrl: '',
    pikminName: '',
    type: '',
    level: '',
    weakness: ''
  }

  componentDidMount(){
    const initialState = {
      imageUrl: this.props.pikmin.imageUrl,
      pikminName: this.props.pikmin.pikminName,
      type: this.props.pikmin.type,
      level: this.props.pikmin.level,
      weakness: this.props.pikmin.weakness
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
      <div>
      <Card>
        <CardImg top width="100%" src={this.state.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.type}</CardTitle>
          <CardSubtitle>{this.state.pikminName}</CardSubtitle>
          <CardText>{this.state.weakness}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
      <PikminStyles>

        <input onBlur={this.handleUpdate}
          onChange={this.handleChange}
          type="text" name="title"
          value={this.state.pikminName}
        />
        <textarea onBlur={this.handleUpdate}
          onChange={this.handleChange}
          name="description" value={this.state.description}
        />
        <button onClick={this.handleDelete}>X</button>
      </PikminStyles>
      </div>
    )
  }
}

export default Pikmin
