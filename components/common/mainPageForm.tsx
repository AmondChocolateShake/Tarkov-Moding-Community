import React, { useState ,useEffect} from 'react'
import TopBar from './TopBar'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'
import { Guns } from '../global/global'




const mainPageForm:React.FC=(props)=>{
  const[pageState,setPageState]=useState('main');
  const[gunList,setGunList]=useState([]);


  const fColumn:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    backgroundColor:'black'
  }

  const fRow:React.CSSProperties={
    display:'flex',
    flexDirection:'row'
  }

  const size:React.CSSProperties={
    width:'100vw',
    minHeight:'75vh'
  }
  const jtfyctntSpcArnd:React.CSSProperties={
    justifyContent:'space-around'
  }

  const mainContainer={...fRow,...size,...jtfyctntSpcArnd}






  return(
    <div style={fColumn}>
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
