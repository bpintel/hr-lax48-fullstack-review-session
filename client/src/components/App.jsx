import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import Add from './Add.jsx';
import Random from './Random.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentList : []
    }
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get('/api/students')
    .then((results) => {
      this.setState({
         studentList: results.data
      })
    })
    .catch(err => console.log(err))
  }

  changePage(e){
    // Todo: Add your logic to "change pages" here on button click
    this.setState({ page: e.target.value})
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Add />
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <List students={this.state.studentList}/>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home' onClick={this.changePage}>Back</button>
          <Random />
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changePage}>Add Student</button>
          <button value='list' onClick={this.changePage}>List Students</button>
          <button value='random' onClick={this.changePage}>Random Student</button>
        </div>
      )
    }
  }
}