import React from 'react'
import ResultOf from './ResultOf';
import PostsOnBoard from './PostsOnBoard';
interface Name{
  name:string
  id:string
}

const Board:React.FC<Name>=(props)=>{

  return(
    <div>
      <ResultOf name={props.name}></ResultOf>
      <PostsOnBoard id={props.id}></PostsOnBoard>
    </div>
  );
}

export default Board;