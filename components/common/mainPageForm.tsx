import React from 'react'
import TopBar from './TopBar'



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


  return(
    <div style={fColumn}>
      <header>
        <TopBar></TopBar>
      </header>

      <div style={fRow}>
        {/* <LeftMenu></LeftMenu>
        <MainContent></MainContent> */}
      </div>
    </div>

  );
}

export default mainPageForm;
