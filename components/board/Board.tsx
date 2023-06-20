import React from 'react'
import ResultOf from './ResultOf';

interface Name{
  name:string
}

const Board:React.FC<Name>=(props)=>{

  return(
    <div>
      <ResultOf name={props.name}></ResultOf>
      
    </div>
  );
}

export default Board;