import React, { useEffect, useState } from 'react'
import Gun from './Gun'
import { useSelector } from 'react-redux'
import { fetching } from '../global/FetchAPI'



// interface props{
//   pageState:string
//   setPageState:(page:string)=>void
//   setId:(id:string)=>void
// }


interface GunData {
  id: string
  name: string
  imageLink: string
}

const ContentOfGuns:React.FC=(props)=>{
  const [guns,setGuns]=useState([{
    id:"",
    name:"",
    imagex8Link:""
  }]);


  useEffect(()=>{
    fetch('http://localhost:3000/guns')
    .then(res=>res.json())
    .then(data=>{setGuns(data)})
  },[])

  
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    width:'95%',
    height:'95%'
  }
  

  return(
    <div style={container}>
      {guns.length>0 &&
        guns.map((item,index)=>(

          <Gun gunImg={item.imagex8Link} gunName={item.name} key={index} id={item.id}></Gun>
        ))
      }
    </div>
  );
}

export default ContentOfGuns;