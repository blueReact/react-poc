import { useState } from 'react';

function Title(props) {  
  console.log(props)
  return (
    <div>
        <h1 className = "title">{props.title}</h1>
        <p className='subtitle'>{props.subtitle}</p>
    </div>
  );
}

export default Title;
