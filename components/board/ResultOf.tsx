import React,{useEffect, useState} from 'react'

interface Name{
  name:string
}

const ResultOf:React.FC<Name>=(props)=>{
  const[name,setName]=useState(props.name);
  const[flag,setFlag]=useState(false);

  useEffect(()=>{
    console.log(name);
    setFlag(true)
  },[name])

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

  return(
    <div style={container}>
      {flag&&<div style={fontSt}>Result of {name}</div>}
      <div style={Box}>글쓰기</div>
    </div>
  );
}

export default ResultOf;


