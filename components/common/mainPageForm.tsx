import React, { useState } from 'react'
import TopBar from './TopBar'
import LeftMenu from './LeftMenu'
import MainContent from './MainContent'
import { Guns } from '../global/global'

const mainPageForm:React.FC=()=>{
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
        <TopBar></TopBar>
      </header>
      
      <div style={mainContainer}>
        <LeftMenu Guns={Guns}></LeftMenu>
        
        <MainContent></MainContent>
      </div>
    </div>

  );
}

export default mainPageForm;
