import React from 'react'
import Gun from './Gun'
import { Guns } from '../global/global'






const ContentOfGuns:React.FC=()=>{
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    flexWrap:'wrap',
    width:'95%',
    height:'95%'
  }
  return(
    <div style={container}>
      {
        Guns.map(item=>(
          <Gun gunImg={item.imgLink} gunName={item.name}></Gun>
        ))
      }
    </div>
  );
}

export default ContentOfGuns;