import React, { useState } from 'react'
import ModInfoBox from './ModInfoBox';


const ModList=()=>{
  const[slotName,setSlotName]=useState();
  const[iconLink,setIconLink]=useState();
  const[shortName,setShortName]=useState();
  const[name,setName]=useState();
  const[ergo,setErgo]=useState();
  const[vertical,setVertical]=useState();
  const[price,setPrice]=useState();
  

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    minHeight:'500px',
    height:'fit-content'

  }

  return(
    <div style={container}>
      <ModInfoBox></ModInfoBox>

    </div>
  );
}


export default ModList;