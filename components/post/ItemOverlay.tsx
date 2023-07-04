import React from 'react'

interface Props{
  setClicked:(state:boolean)=>void

}

const ItemOverlay:React.FC<Props>=(props)=>{


  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'500px',
    height:'200px',
    maxHeight:'300px',
    backgroundColor:'black',
    border:'1px solid white'

  } 

  function clickHandler(){
    props.setClicked(false)
  }

  return(
    <div style={container} >
      <div></div>
    </div>
  );
}


export default ItemOverlay;