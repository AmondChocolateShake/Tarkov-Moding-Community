import React from 'react'

interface WName{
  name:string
}


const WeaponName:React.FC<WName>=(props)=>{
  const nameSt:React.CSSProperties={
    color:'rgba(255,255,255,0.8)',
    fontSize:'20px'
  }

  return(
    <div style={nameSt}>{props.name}</div>
  );
}

export default WeaponName;