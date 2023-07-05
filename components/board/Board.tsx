import React, { useEffect,useState } from 'react'
import ResultOf from './ResultOf';
import PostsOnBoard from './PostsOnBoard';
interface Name{
  id:string
  postIdHandler:(id:number)=>void
}

const Board:React.FC<Name>=(props)=>{
  const[name,setName]=useState('');
  const[id,setId]=useState(props.id)
  const[flag,setflag]=useState(false);

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'95%',
    height:'70px'
  }

  const fontSt:React.CSSProperties={
    color:'white',
    fontSize:'20px'
  }

  const Box:React.CSSProperties={
    width:'50px',
    height:'30px',
    border:'1px solid white',
    borderRadius:'15px'
  }

  useEffect(()=>{
    fetch('/get_name_by_id',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    .then(response=>response.json())
    .then(data=>{
      // console.log(data[0].shortName);
      setName(data[0].shortName);
    })
    .catch(error=>{
      console.error('Error :',error);
    })

  },[id])
  
  useEffect(()=>{
    setflag(true);
    console.log(name);
  },[name])

  return(
    <div>
        <div style={container}>
          {flag&&<div style={fontSt}>Result of {name}</div>}
        <div style={Box}>글쓰기</div>
      </div>
      <PostsOnBoard postIdHandler={props.postIdHandler} id={props.id}></PostsOnBoard>
    </div>
  );
}

export default Board;