import React from 'react';
import Input from './input.jsx';

export default function Body(props) {
  return(
    <div className="Body">
      App body.
      {/* <p>{props.notation}</p> */}
      <div className="Columns">
        <Input notation={props.notation}
        />
      </div>
    </div>
  )
}
