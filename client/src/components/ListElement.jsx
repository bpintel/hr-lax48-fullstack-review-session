import React from 'react';
import axios from 'axios';


class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
      input: ''
    }
    this.editModeToggle = this.editModeToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  editModeToggle() {
    this.setState({
      editMode: !this.state.editMode
    })   
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  updateStudent() {
    axios.put(`/api/students/${this.props.student._id}`, {
      name: this.state.input
    })
    .then(() => this.props.getStudents())
    .catch(err => console.log(err))
  }

  deleteStudent() {
    if(confirm(`Are you sure you want to delete ${this.props.student.name}`)){
      axios.delete(`/api/students/${this.props.student._id}`)
      .then(() => {
        this.props.getStudents()
      })
      .catch(err => console.log(err))
    } 
  }

  render() {
    return (
      <div>
      <div onClick={this.editModeToggle}>{this.props.student.name}</div>
      {this.state.editMode &&
      <div>
        <div>
        <input onChange={this.handleChange}></input>
        </div>
        <span>
          <button onClick={this.editModeToggle}>Cancel</button>
          <button onClick={this.updateStudent}>Update</button>
          <button onClick={this.deleteStudent}>Delete</button>
        </span>
      </div>
      
      }
      <img src={this.props.student.imageUrl}></img>
      </div>
    )
  }
}
export default ListElement;