import React from 'react';

export default function Input(props) {
  return(
    <div className="Input Column">
      <textarea
        placeholder="5A > 5B > 5C > 236A"
        value={props.notation}
        // className="Input-text"
      />
    </div>
  )
}
