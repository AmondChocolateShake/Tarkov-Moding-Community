import React, { useState } from 'react'
import ModInfoBox from './ModInfoBox';

interface Props{
  mods:{
    slotName:string,
    iconLink:string,
    shortName:string,
    name:string,

    ergo:number,
    recoil:number,
    
    price:{
      price:number,
      currency:string,
    }[]
  }[]
}

const ModList:React.FC<Props>=(props)=>{
  const[mods,setMods]=useState(props.mods);
  

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
      {
        mods.map((item,index)=>(
          <ModInfoBox
          slotName={item.slotName}
          iconLink={item.iconLink}
          shortName={item.shortName}
          name={item.name}
          ergo={item.ergo}
          recoil={item.recoil}
          price={item.price}
          key={index}
          ></ModInfoBox>
        ))
      }

    </div>
  );
}


export default ModList;