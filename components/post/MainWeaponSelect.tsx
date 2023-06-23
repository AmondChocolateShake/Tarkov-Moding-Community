import React from 'react'
import SelectBox from './SelectBox';

const MDR={
categoryId:"mainWeapon",
id:"5c488a752e221602b412af63",
shortName:"MDR",
name:"Desert Tech MDR 5.56x45 assault rifle",
iconLink:"https://assets.tarkov.dev/5c488a752e221602b412af63-icon.webp","imageLink":"https://assets.tarkov.dev/5c488a752e221602b412af63-image.webp",
value:null,
conflictingItemIds:null,
caliber:"Caliber556x45NATO",
fireRate:650,
ergonomics:72,
verticalRecoil:87,
horizontalRecoil:242,
accuracyPercentageModifier:0,
capacity:0,
loadSpeedPercentageModifier:0,
checkSpeedPercentageModifier:0,
fleshDamage:0,
penetrationPower:0,
class:null,
fragmentationChancePercentage:0,
modSlots:null
}


const MainWeaponSelect:React.FC=()=>{

  const container:React.CSSProperties={
    color:'white'
  }
  return(
    <div style={container}>
      <SelectBox item={MDR}></SelectBox>
    </div>
  );
}

export default MainWeaponSelect;