import React from 'react';


class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false,
      input: ''
    }
    //bind
    this.editModeToggle = this.editModeToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
          <button>Update</button>
        </span>
      </div>
      
      }
      <img src={this.props.student.imageUrl}></img>
      </div>
    )
  }
}
export default ListElement;