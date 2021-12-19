import React from 'react';
import ListElement from './ListElement.jsx';

const List = ({ students }) =>
  <div>
    {
      students.map((student) => (
      <ListElement key={student._id} student={student} />   
      ))
    }
    
  </div>


export default List