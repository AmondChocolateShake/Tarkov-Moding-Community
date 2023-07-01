import React from 'react'
import MainWeaponSelect from './MainWeaponSelect';



const Moding:React.FC=()=>{
  

  const container:React.CSSProperties={
    display:'flex',
    width:'80%',
    minHeight:'500px',
    flexDirection:'column',
    

  }
  return(
    <div style={container}>
      <MainWeaponSelect></MainWeaponSelect>
      {

      }
    </div>
  );
}


export default Moding