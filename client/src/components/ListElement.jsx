import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      input: ''
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateName= this.updateName.bind(this);
    this.deleteStudent= this.deleteStudent.bind(this);

  }

  //function to toggle edit mode
  toggleEdit() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  //function to handle input
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  
  //function to update a students name (axios.put)
  updateName() {
    axios.put(`/api/students/${this.props.student._id}`, {
      name: this.state.input
    })
    .then(() => this.props.getStudents())
    .catch((err) => console.log(err))
  }

  // delete a student
  deleteStudent() {
    axios.delete(`/api/students/${this.props.student._id}`)
    .then(() => {
      alert(`${this.props.student.name} deleted.`)
      this.props.getStudents()
    })
    .catch(err => console.log(err))
  }

  //function to conditionally render edit mode
  editMode() {
    if (this.state.editMode) {
      return (
        <div>
          <div>
            <input onChange={this.handleChange}></input>
          </div>
          <span>
            <button onClick={this.toggleEdit}>Cancel</button>
            <button onClick={this.updateName}>Update</button>
            <button onClick={this.deleteStudent}>Delete Student</button>

          </span>
        </div>
      )
    }
  }

  render() {
    return (
      <span>
        <div onClick={this.toggleEdit}>{this.props.student.name}</div>
        {this.editMode()}
        <img src={this.props.student.imageUrl}></img>
      </span>
    )
  }
}



export default ListElement