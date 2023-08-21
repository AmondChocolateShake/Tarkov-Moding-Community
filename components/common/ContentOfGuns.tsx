import React, { useEffect, useState } from 'react'
import Gun from './Gun'
import { useSelector } from 'react-redux'



// interface props{
//   pageState:string
//   setPageState:(page:string)=>void
//   setId:(id:string)=>void
// }


interface GunData {
  id: string
  name: string
  imageLink: string
}

const ContentOfGuns:React.FC=(props)=>{
  const guns=useSelector();

  
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    width:'95%',
    height:'95%'
  }
  

  return(
    <div style={container}>
      {guns.length>0 &&
        guns.map((item,index)=>(

          // <Gun setId={props.setId} setPageState={props.setPageState} gunImg={item.imageLink} gunName={item.name} key={index} id={item.id}></Gun>
        ))
      }
    </div>
  );
}

export default ContentOfGuns;