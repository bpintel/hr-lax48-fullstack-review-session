import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      random: Math.floor(Math.random() * this.props.students.length)
    }
    this.getRandomStudent = this.getRandomStudent.bind(this)
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student
    this.setState({random: ind})
  }

  render() {
    return (
      <div>
        <button onClick={this.getRandomStudent}>Randomize</button>
        <div>
          <img src={this.props.students[this.state.random].imageUrl}></img>
          <h1>{this.props.students[this.state.random].name}</h1>
        </div>
      </div>
    )
  }
}

export default Random;