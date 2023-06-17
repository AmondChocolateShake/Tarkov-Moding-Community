import React from 'react'
import Logo from '../../src/img/tarkov_logo.png'

const TopBar:React.FC=()=>{
  const fRow:React.CSSProperties={
    display:'flex',
    flexDirection:'row'
  }
  const fColumn:React.CSSProperties={
    display:'flex',
    flexDirection:'column'
  }
  
  const jtfyctntCenter:React.CSSProperties={
    justifyContent:'center'
  }

  const jtfyctntSpcArnd:React.CSSProperties={
    justifyContent:'space-around'
  }
  
return(
  <div style={fRow}>
    <div>
      <img src={Logo} alt="Logo" />
    </div>
  
    <div>
      <input></input>
      <div></div>
    </div>
  </div>


);
}

export default TopBar;

