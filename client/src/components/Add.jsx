import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      url: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeHandler(e){
    // Todo: Add your code here to handle the data the client inputs
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    // Todo: Add your code here to handle the API requests to add a student
    e.preventDefault()
    axios.post('/api/students', {
      name: this.state.name,
      imageUrl: this.state.url
    })
    .then(() =>{
      alert(`${this.state.name} added.`)
      this.setState({
        name: '',
        url: ''
      })
      this.props.getStudents()
    })
    .catch(err => console.log(err))
  }
    
      
      

  showPreview(){
    return (
      (this.state.name && this.state.url) ? (
        <div>
          <img src={this.state.url}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="url" value={this.state.url} onChange={this.changeHandler}/>
          <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        <h1>Preview:</h1>
        {this.showPreview()}
      </div>
    )
  }
}