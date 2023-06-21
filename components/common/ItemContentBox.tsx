import React, { useState } from 'react'

interface ItemData{
  item:{
    [key: string]: any,
    categoryId:string,
    id:string,
    shortName:string,
    name:string|null,
    color:string|null,
    iconLink:string|null,
    imageLink:string|undefined,
    value:{
      value:number,
      currencyName:string,
    }|null,
    conflictingItemIds:string[]|null,
    caliber:string|null
    fireRate:number|null,
    ergonomics:number|null,
    verticalRecoil:number|null,
    horizontalRecoil:number|null,
    accuracyPercentageModifier:number|null,
    capacity:number|null,
    loadSpeedPercentageModifier:number|null,
    checkSpeedPercentageModifier:number|null,
    fleshDamage:number|null,
    penetrationPower:number|null,
    class:number[]|null,
    fragmentationChancePercentage:number|null
    
    modSlots:{
      name:string,
      compatibleItemIds:string[]
    }[]|null
  }
}
//오버레이 박스 내 아이템 정보를 표시하는 컴포넌트
//필요 input은 아이템 데이터
const ItemContentBox:React.FC<ItemData>=(props)=>{
  const[item,setItem]=useState(props.item);
  const[recoil,setRecoil]=useState(0);

  if(item.verticalRecoil!==null&&item.horizontalRecoil!==null){
    setRecoil(item.verticalRecoil+item.horizontalRecoil);
  }

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'95%',
    height:'70px'
  }

  return(
    <div style={container}>
      <div>{item.name}</div>
      <div>{item.ergonomics}</div>
      <div>{recoil}</div>
      <div></div>
      {item.categoryId==='mainWeapon'&&<img src={item.imageLink} alt="item image" />}
      {item.categoryId==='rangedWeaponMod'&&<img src={item.imageLink} alt="item image" />}
      
    </div>

  );
}

export default ItemContentBox