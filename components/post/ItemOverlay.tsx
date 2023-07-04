import React from 'react'
import ItemElement from './ItemElement'

interface Props{
  setClicked:(state:boolean)=>void
  compabilityIds:string[]
  id:string
}

const ItemOverlay:React.FC<Props>=(props)=>{


  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'500px',
    height:'400px',
    maxHeight:'300px',
    backgroundColor:'black',
    border:'1px solid white'
    
  } 

  function clickHandler(){
    props.setClicked(false)
  }

  return(
    <div style={container} >
      <ItemElement></ItemElement>
    </div>
  );
}


export default ItemOverlay;