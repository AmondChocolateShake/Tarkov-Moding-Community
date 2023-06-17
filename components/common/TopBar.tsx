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
  const jtfyctntStart:React.CSSProperties={
    justifyContent:'flex-start'
  }

  const alignCenter:React.CSSProperties={
    alignItems:'center',
  }
  const size:React.CSSProperties={
    width:''
  }

  const searchBar:React.CSSProperties={
    border:'1px solid white',
    height:'30px',
    width:'300px'
  }
  const topSt={...fRow,...jtfyctntStart,alignCenter}
  const searchSt={...fRow,...jtfyctntCenter,...alignCenter}
  

return(
  <div style={topSt}>
    <div>
      <img src={Logo} alt="Logo" style={{width:'300px',height:'150px'}}/>
    </div>
  
    <div style={searchSt}>
      <input style={searchBar}></input>
      <div></div>
    </div>
  </div>


);
}

export default TopBar;

