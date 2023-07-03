import React, { useState ,useEffect} from 'react'
import TopBar from './TopBar'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'




const mainPageForm:React.FC=(props)=>{
  const[pageState,setPageState]=useState('main');
  const[gunList,setGunList]=useState([]);

  const getPageState=()=>{
    return pageState;
  }
  

  const outter:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    backgroundColor:'black',
    width:'100vw',
    minWidth:'1280px',
    height:'100vh'
  }

  const fRow:React.CSSProperties={
    display:'flex',
    flexDirection:'row'
  }

  const size:React.CSSProperties={
    width:'100%',
    minHeight:'75%'
  }
  const jtfyctntSpcArnd:React.CSSProperties={
    justifyContent:'space-around'
  }

  const mainContainer={...fRow,...size,...jtfyctntSpcArnd}






  return(
    <div style={outter}>
      <header>
        <TopBar pageState={pageState} setPageState={setPageState}></TopBar>
      </header>
      
      <div style={mainContainer}>
        <LeftMenu Guns={gunList}></LeftMenu>

        <MainContent pageState={pageState} setPageState={setPageState}></MainContent>
      </div>
    </div>

  );
}

export default mainPageForm;
