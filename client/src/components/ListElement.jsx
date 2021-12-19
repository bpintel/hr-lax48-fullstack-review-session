import React from 'react';


class ListElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    //bind
  }

  //

  


  render() {
    return (
      <div>
      <div>{this.props.student.name}</div>
      <img src={this.props.student.imageUrl}></img>
      </div>
    )
  }
}
export default ListElement;