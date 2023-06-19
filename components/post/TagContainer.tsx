import React from 'react'


interface tag{
  tagName:string
}

const TagContainer:React.FC<tag>=(props)=>{

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

  const tagText:React.CSSProperties={
    color:'rgba(255,255,255,0.8)',

  }


  return(
    <div style={container}>
      <div style={tagText}>{props.tagName}</div>
    </div>
  );
}

export default TagContainer;