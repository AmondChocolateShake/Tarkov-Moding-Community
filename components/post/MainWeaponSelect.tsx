import React from 'react'
import SelectBox from './SelectBox';



const Guns={
  

}

const MainWeaponSelect:React.FC=()=>{

  const container:React.CSSProperties={
    color:'white'
  }
  return(
    <div style={container}>
      <SelectBox name='M4A1' color='white' iconLink='' itemCategory='mainWeapon'></SelectBox>
    </div>
  );
}

export default MainWeaponSelect;