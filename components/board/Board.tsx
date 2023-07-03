import React, { useEffect,useState } from 'react'
import ResultOf from './ResultOf';
import PostsOnBoard from './PostsOnBoard';
interface Name{
  id:string
  postIdHandler:(id:number)=>void
}

const Board:React.FC<Name>=(props)=>{
  const[name,setName]=useState('');

  useEffect(()=>{
    fetch('/get_name_by_id',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:props.id})
    })
    .then(response=>response.json())
    .then(data=>{
      setName(data);
    })
    .catch(error=>{
      console.error('Error :',error);
    })

  },[])
  


  return(
    <div>
      <ResultOf name={name}></ResultOf>
      <PostsOnBoard postIdHandler={props.postIdHandler} id={props.id}></PostsOnBoard>
    </div>
  );
}

export default Board;