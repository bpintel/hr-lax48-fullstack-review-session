import React from 'react';


class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: false
    }
    //bind
    this.editModeToggle = this.editModeToggle.bind(this);
  }

  editModeToggle() {
    this.setState({
      editMode: !this.state.editMode
    })   
  }

  


  render() {
    return (
      <div>
      <div onClick={this.editModeToggle}>{this.props.student.name}</div>
      {this.state.editMode &&
      <div>
        <div>
        <input></input>
        </div>
        <span>
          <button>Cancel</button>
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