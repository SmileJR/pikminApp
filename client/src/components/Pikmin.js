import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


// const PikminStyles = styled.div`
//   display: flex;
//   position: relative;
//   flex-direction: column;
//   width: 200px;
//   height: 200px;
//   background: #f1faee;
//   margin: 10px 0;
//   button {
//     position: absolute;
//     top: 5px;
//     right: 10px;
//   }

//   input,
//   textarea {
//     background-color: transparent;
//     border: none;
//   }

//   input {
//     height: 30%;
//     font-size: 1.3rem;
//   }
//   textarea {
//     height: 70%;
//   }
// `

class Pikmin extends Component {
  state = {
    imageUrl: '',
    pikminName: '',
    type: '',
    level: '',
    weakness: '',
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
      div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
      {/* <PikminStyles> */}
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
      {/* </PikminStyles> */}
      </div>
    )
  }
}

export default Pikmin
