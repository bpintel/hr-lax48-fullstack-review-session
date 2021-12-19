import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({ students, getStudents}) =>
  <div>
    {
      students.map((student) => (
      <ListElement key={student._id} student={student} getStudents={getStudents}/>   
      ))
    }
    
  </div>


export default List