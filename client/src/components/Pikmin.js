import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

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
      //if i dont do this part the app wont know what to put in the state 
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
          <CardTitle>Pikmin Name: {this.state.pikminName}</CardTitle>
          <CardSubtitle>Type: {this.state.type}</CardSubtitle>
          <CardSubtitle>Level: {this.state.level}</CardSubtitle>
          <CardText>Weakness: {this.state.weakness}</CardText>
        </CardBody>
      </Card>
    
      
        
        <button onClick={this.handleDelete}>Delete this Pikmin</button>
        
      
      </div>
    )
  }
}

export default Pikmin
