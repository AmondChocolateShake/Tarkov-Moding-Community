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
      alignItems:'center',
      border:'1px solid white',
      borderRadius:'10px',
      marginLeft:'6px'
    }}>
      <div style={{color:'white'}}>{props.tagName}</div>
    </div>
  );
}

export default Tag;