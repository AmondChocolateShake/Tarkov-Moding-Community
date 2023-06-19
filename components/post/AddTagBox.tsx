import React ,{useState}from 'react'
import './cross.css'
import {Plus} from '../../src/img/plusIcon.png'



const AddTagBox:React.FC=()=>{
  const[click,setClick]=useState(false)

  function Clicked(){
    setClick(true)
  }

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'70px',
    height:'32px',
    border:'1px solid white',
    borderRadius:'10px',
    marginLeft:'5px'
  }

  const inputSt:React.CSSProperties={
    width:'80%',
    height:'60%',
    backgroundColor:'#1E1E1E',
    border:'none',
    color:'white'
  }

  return(
    <div style={container}>
      {click && <input style={inputSt}></input>}
      {!click && <div className='cross' onClick={Clicked}></div>}
    </div>
  );
}

export default AddTagBox