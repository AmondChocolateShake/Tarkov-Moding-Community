import React from 'react'

interface Item{
  category:string,
  id:string,
  shortName:string,
  fullName:string,
  iconLink:string,
  color:string,
  value:{
    price:number,
    currency:string,
  }|null,
  conflictItems:string[]|null,
  ability:{
    ammunitionType:string|null
    rpm:number|null,
    ergo:number|null,
    vertical:number|null,
    horizontal:number|null,
    accuracy:number|null,
    magazineCapacity:number|null,
    reloadSpeed:number|null,
    checkDuration:number|null,
    damage:number|null,
    penetrationPower:number|null,
    class:number[]|null,
    fragmentationChance:number|null
  },
  modSlot:{
    slotName:string,
    capatibleItems:string[],
    item:Item
  }[]|null
}

interface BoxStyle{
  itemCategory:string
  color:string,

}

const SelectBox:React.FC<BoxStyle>=(props)=>{

  let container:React.CSSProperties={
    display:'flex',
    width:'200px',
    height:'100px',
    border:'1px solid white'
  }

  return(
    <div style={container}>

    </div>
  );
}

export default SelectBox