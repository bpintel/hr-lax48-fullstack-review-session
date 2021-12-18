import axios from 'axios';
import React from 'react';

class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: '',
      editModeToggled: false
    }
    this.editMode = this.editMode.bind(this);
    this.toggleEditMode= this.toggleEditMode.bind(this);
    this.handleInputChange= this.handleInputChange.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  toggleEditMode() {
    this.setState({ editModeToggled: !this.state.editModeToggled})

  }
  handleInputChange (e) {
    this.setState({ inputName: e.target.value})
  }

  updateName() {
    axios.put(`/studentList/students/${this.props.student._id}`, {
      name: this.state.inputName
    })
    .then(() => this.props.getStudents())
    .catch((err) => console.log(err))
  }

  editMode() {
    if (this.state.editModeToggled) {
      return (
        <div>
          <div>
            <input onChange={this.handleInputChange}></input>
          </div>
          <span>
            <button onClick={this.toggleEditMode}>Cancel</button>
            <button onCLick={this.updateName}>Update</button>
          </span>
        </div>
      )
    }
  }

  render() {

    return (
      <span>
        <div onCLick={this.toggleEditMode}>{this.props.student.name}</div>
        {this.editMode()}
        <img src={this.props.student.imageUrl}></img>
      </span>
    )  
  }

}

export default ListElement