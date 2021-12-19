import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentList : []
    }
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

  changepage(e){
    // Todo: Add your logic to "change pages" here on button click

  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home'>Back</button>
          <Add />
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button value='home'>Back</button>
          <List />
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home'>Back</button>
          <Random />
        </div>
      )
    } else {
      return (
        <div>
          <button value='add'>Add Student</button>
          <button value='list'>List Students</button>
          <button value='random'>Random Student</button>
        </div>
      )
    }
  }
}