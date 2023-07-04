import React,{useState} from 'react'
import ItemElement from './ItemElement'

interface Props{
  idHandler:(id:string)=>void,
  openWindow:(state:boolean)=>void
  compatibleIds:string[]

}

const ItemOverlay:React.FC<Props>=(props)=>{
  const[compatibleIds,setCompatibleIds]=useState(props.compatibleIds);

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
    props.openWindow(false)
  }

  return(
    <div style={container} >
      <div onClick={clickHandler}>X</div>
      {
        compatibleIds.map((item,index)=>(
          <ItemElement idHandler={props.idHandler} id={item} key={index}></ItemElement>
        ))
      }
    </div>
  );
}


export default ItemOverlay;