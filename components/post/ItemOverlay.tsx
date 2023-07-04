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
    height:'500px',
    maxHeight:'300px',
    backgroundColor:'black',
    border:'1px solid white'
    
  } 

  const scroll:React.CSSProperties={
    maxHeight:'95%',
    overflow:'auto'
  }
  function clickHandler(){
    props.openWindow(false)
  }

  const idHandler=(id:string)=>{
    props.idHandler(id);
  }

  return(
    <div style={container} >
      <div style={{height:'5%'}} onClick={clickHandler}>X</div>
      <div style={scroll}>
      {
        compatibleIds.map((item,index)=>(
          <ItemElement idHandler={idHandler} id={item} key={index}></ItemElement>
        ))
      }
      </div>
    </div>
  );
}


export default ItemOverlay;