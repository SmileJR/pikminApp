import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


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
    pikminId: '',
    imageUrl: '',
    pikminName: '',
    type: '',
    level: '',
    weakness: ''
  }

  componentDidMount(){
    const initialState = {
      pikminId: this.props.pikmin._id,
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
    axios.delete(`/api/pikmins/${this.state.pikminId}`).then(() => {
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
          <CardTitle>{this.state.pikminName}</CardTitle>
          <CardSubtitle>{this.state.type}</CardSubtitle>
          <CardSubtitle>{this.state.level}</CardSubtitle>
          <CardText>{this.state.weakness}</CardText>
        </CardBody>
      </Card>
    
      <PikminStyles>
        
        <button onClick={this.handleDelete}>Delete this Pikmin</button>
        
      </PikminStyles>
      </div>
    )
  }
}

export default Pikmin
