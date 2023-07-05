import React,{useEffect, useState} from 'react'
import MainItemElement from './MainItemElement'

interface Props{
  idHandler:(id:string)=>void,
  openWindow:(state:boolean)=>void
  compatibleIds:string[]

}

const MainItemOverlay:React.FC<Props>=(props)=>{
  const[compatibleIds,setCompatibleIds]=useState(props.compatibleIds);
  const[flag,setFlag]=useState(false);

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'500px',
    height:'fit-content',
    maxHeight:'300px',
    backgroundColor:'black',
    border:'1px solid white'
    
  } 

  const scroll:React.CSSProperties={
    maxHeight:'95%',
    width:'100%',
    overflow:'auto'
  }
  function clickHandler(){
    props.openWindow(false)
  }

  const idHandler=(id:string)=>{
    props.idHandler(id);
  }

  useEffect(()=>{
    setFlag(true);
    console.log('item overlay : ',compatibleIds)
  },[compatibleIds])

  return(
    <div style={container} >
      <div style={{height:'5%'}} onClick={clickHandler}>X</div>
      <div style={scroll}>
      {flag&&
        compatibleIds.map((item,index)=>(
          <MainItemElement idHandler={idHandler} id={item} key={index}></MainItemElement>
        ))
      }
      </div>
    </div>
  );
}


export default MainItemOverlay;