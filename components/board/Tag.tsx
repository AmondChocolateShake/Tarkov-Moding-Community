import React from 'react'

interface Tag{
  tagName:string
}
const Tag:React.FC<Tag>=(props)=>{

  return(
    <div style={{
      display:'flex',
      width:'70px',
      height:'30px',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <div style={{color:'white'}}>{props.tagName}</div>
    </div>
  );
}

export default Tag;