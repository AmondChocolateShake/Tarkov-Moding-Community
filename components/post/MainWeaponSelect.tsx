import React from 'react'
import SelectBox from './SelectBox';

const MainWeaponSelect:React.FC=()=>{

  const container:React.CSSProperties={
    color:'white'
  }
  return(
    <div style={container}>
      <div>Main Weapon</div>
      <SelectBox itemCategory='mainWeapon' color='white'></SelectBox>
    </div>
  );
}

export default MainWeaponSelect;