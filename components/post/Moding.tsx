import React, { useState } from 'react'
import MainWeaponSelect from './MainWeaponSelect';


interface Props{
  addId:(id:string)=>void
}

const Moding:React.FC<Props>=(props)=>{
  const[mainWeaponId,setMainWeaponId]=useState('');

  

  //아이템Id
  //모드슬롯 이름
  //모드슬롯 장착가능id
  const container:React.CSSProperties={
    display:'flex',
    width:'80%',
    minHeight:'500px',
    flexDirection:'column',
    

  }


  const setMainWeapon=(id:string)=>{
    setMainWeaponId(id);
  }

  return(
    <div style={container}>
      <MainWeaponSelect selectMain={setMainWeapon}></MainWeaponSelect>
      
    </div>
  );
}


export default Moding