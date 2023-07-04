import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox';

interface Props{
  selectMain:(id:string)=>void
}

const MainWeaponSelect:React.FC<Props>=(props)=>{
  const[mainIds,setMainIds]=useState(['']);
  const[flag,setFlag]=useState(false);
  useEffect(()=>{
    fetch('/default_weapon',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);

      let temp=[];
      for(let item of data){
        temp.push(item['id']);
      }

      // console.log(temp);
      
      setMainIds(temp);
      setFlag(true);
    })
  },[])



  const container:React.CSSProperties={
    color:'white'
  }

  return(
    <div style={container}>
      {flag&&<SelectBox compatibleIds={mainIds}></SelectBox>}

    </div>
  );
}

export default MainWeaponSelect;