import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../src/img/tarkov_logo.png'
import Glass from '../../src/img/glass.png'

interface props{
  pageState:string
  setPageState:(page:string)=>void
}


/**contains logo, search bar.. */
const TopBar:React.FC<props>=(props)=>{
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
  const SCsize:React.CSSProperties={
    width:'70%'
  }

  const searchBar:React.CSSProperties={
    border:'1px solid white',
    height:'30px',
    width:'300px',
    backgroundColor:'#1E1E1E'
  }
  
  const searchBtnSt:React.CSSProperties={
    width:'30px',
    height:'32px',
    border:'1px solid white',
    backgroundColor:'#1E1E1E',

  }

  const topSt={...fRow,...jtfyctntStart,...alignCenter}
  const searchSt={...fRow,...jtfyctntCenter,...alignCenter,...SCsize}
  
  function clicked(){
    props.setPageState('main')
  }
return(
  <div style={topSt}>
    <Link to='/main'>
      <div onClick={clicked}>
        <img src="tarkov_logo.png" alt="Logo" style={{width:'300px',height:'150px'}}/>
      </div>
    </Link>
  
    <div style={searchSt}>
      <input style={searchBar}></input>
      <div style={searchBtnSt}>
        <img src={Glass} alt="search" style={{width:'100%',height:'100%'}}/>
      </div>
    </div>
    
    <button>Dev</button>
  </div>


);
}

export default TopBar;

