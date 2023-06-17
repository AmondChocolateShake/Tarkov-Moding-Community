import React from 'react'


const MainContent:React.FC=()=>{
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
  const Csize:React.CSSProperties={
    width:'70%',
    minHeight:'500px',
    border:'1px solid white',
    backgroundColor:'#1E1E1E'
  }

  const container={...fColumn,...jtfyctntStart,...Csize}
  return(
    <div style={container}>
      


    </div>

  );
}


export default MainContent