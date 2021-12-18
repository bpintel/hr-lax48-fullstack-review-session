import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) =>
  <div>
    {props.students.map((student) => (
      <ListElement key={student._id} student={student}/>
    ))}

  </div>

export default List