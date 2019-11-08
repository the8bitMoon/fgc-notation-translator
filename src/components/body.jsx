import React from 'react';
import Input from './input.jsx';
import Translation from './translation.jsx';

export default function Body(props) {
  return(
    <div className="Body">
      {/* <p>{props.notation}</p> */}
      <div className="Columns">
        <Input
          notation={props.notation}
        />
        <Translation
        />
          </div>
    </div>
  )
}
