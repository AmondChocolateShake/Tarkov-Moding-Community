import React, { useState } from 'react'
import SelectBox from './SelectBox'

interface Props{
  obj:{
    compatibleItemIds:|string,
    modName:'string'
  }[]
}

const PartList:React.FC<Props>=(props)=>{
  const[modSlots,setModSlots]=useState(props.obj);
  const[partList,setPartList]=useState([]);

  let arr=[]

  modSlots.forEach(obj => {
    arr.push(<SelectBox compatibleIds={[obj.compatibleItemIds]} slotName={obj.modName}></SelectBox>);
    
  });


  return(
    <div></div>
  )
}

export default PartList