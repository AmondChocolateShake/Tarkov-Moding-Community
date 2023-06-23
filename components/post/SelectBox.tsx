import React, { useState } from 'react'

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

interface item{
  item:{
categoryId:string,
id:string,
shortName:string,
name:string,
iconLink:string,
value:null,
conflictingItemIds:null,
caliber:string,
fireRate:number,
ergonomics:number,
verticalRecoil:number,
horizontalRecoil:number,
accuracyPercentageModifier:number,
capacity:number,
loadSpeedPercentageModifier:number,
checkSpeedPercentageModifier:number,
fleshDamage:number,
penetrationPower:number,
class:null,
fragmentationChancePercentage:number,
modSlots:null}
}


const SelectBox:React.FC<item>=(props)=>{
  const[category,setCategory]=useState(props.item.categoryId);
  const[iconLink,setIconLink]=useState(props.item.iconLink);
  const[boxStyle,setBoxStyle]=useState({
    display:'flex',
    width:'400px',
    height:'100px',
    border:'1px solid white',
    borderRadius:'10px'
  });


  if(category==='mainWeapon'){
    // setBoxStyle()
  }



  return(
    <div style={boxStyle}>
      <div style={{
        width:'33%',
        height:'100%',
        borderLeft:'1px solid white'
      }}>
        <img src={iconLink} alt="icon" style={{width:'100%',height:'100%'}}/>
      </div>

      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{props.item.name}</div>
      <div className='cross'></div>
    </div>
  );
}

export default SelectBox