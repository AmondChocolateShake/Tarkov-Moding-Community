import React, { useEffect, useState } from 'react'


interface Props{
  id:string
  idHandler:(id:string)=>void
}

const ItemElement:React.FC<Props>=(props)=>{
  const[id,setId]=useState(props.id);
  const[name,setName]=useState('');
  const[imageLink,setImageLink]=useState('');

  useEffect(()=>{
    fetch('/item_element',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    .then(res=>res.json)
    .then(data=>{
      console.log(data);
      
    })
  },[id])

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'80px',
    backgroundColor:'#1E1E1E',
    border:'1px solid #ACA891'
  }

  const selected=()=>{
    props.idHandler(id);
  }

  return(
    <div style={container} onClick={selected}>
      <div>
        <img src={imageLink} alt="" />
      </div>

      <div>
        <div>{name}</div>
      </div>

    </div>
  );
}

export default ItemElement;