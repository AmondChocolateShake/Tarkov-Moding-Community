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
    inspectImageLink:""
  }]);
  const[flag,setFlag]=useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/guns')
    .then(res=>res.json())
    .then(data=>{
      setGuns(data);
      setFlag(true);
    })
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
      {flag &&
        guns.map((item,index)=>(

          <Gun gunImg={item.inspectImageLink} gunName={item.name} key={index} id={item.id}></Gun>
        ))
      }
    </div>
  );
}

export default ContentOfGuns;