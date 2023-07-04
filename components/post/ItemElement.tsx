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
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setName(data[0].name);
      setImageLink(data[0].imageLink)
    })
  },[id])

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100px',
    backgroundColor:'#1E1E1E',
    border:'1px solid #ACA891'
  }

  const selected=()=>{
    props.idHandler(id);
  }

  return(
    <div style={container} onClick={selected}>
      <div style={{width:'40%',height:'100%'}}>
        <img style={{width:'100%',height:'100%'}} src={imageLink} alt="" />
      </div>

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'60%',
        height:'100%'}}>
        <div style={{width:'90%'}}>{name}</div>
      </div>

    </div>
  );
}

export default ItemElement;