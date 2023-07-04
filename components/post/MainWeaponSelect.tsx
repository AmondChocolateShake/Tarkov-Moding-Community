import React from 'react'
import SelectBox from './SelectBox';

interface Props{
  selectMain:(id:string)=>void
}

const MainWeaponSelect:React.FC<Props>=(props)=>{

  const container:React.CSSProperties={
    color:'white'
  }

  return(
    <div style={container}>
      <SelectBox id={''}></SelectBox>
      
    </div>
  );
}

export default MainWeaponSelect;