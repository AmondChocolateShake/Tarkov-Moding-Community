import React, { useEffect, useState } from 'react'
import MainWeaponSelect from './MainWeaponSelect';
import WriteBtn from './WriteBtn';
import SelectBox from './SelectBox';


interface Props{
  addId:(id:string)=>void
}

const Moding:React.FC<Props>=(props)=>{
  const[mainWeaponId,setMainWeaponId]=useState('');
  const[modSlots,setModSlots]=useState([{
    modName:'',
    compatibleItemIds:''
  }])
  const[weaponSelected,setWeaponSelected]=useState(false);
  const[flag,setFlag]=useState(false);
  const[partList,setPartList]=useState([]);
  //아이템Id
  //모드슬롯 이름
  //모드슬롯 장착가능id
  const container:React.CSSProperties={
    display:'flex',
    width:'80%',
    minHeight:'500px',
    flexDirection:'column',
    

  }

  const btnContainer:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'100%',
    height:'100px'
  }


  const setMainWeapon=(id:string)=>{
    setMainWeaponId(id);
    setWeaponSelected(true);
  }

  useEffect(()=>{
    
    fetch('/weapon_modSlots',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:mainWeaponId})
    })
    .then(res=>res.json())
    .then(data=>{
      setModSlots(data);
      setFlag(true);

    })
    .catch()

  },[mainWeaponId])

  return(
    <div style={container}>
      <MainWeaponSelect selectMain={setMainWeapon}></MainWeaponSelect>
      {flag&&
        modSlots.map((item,index)=>(
          <SelectBox key={index} compatibleIds={[item.compatibleItemIds]} slotName={item.modName}></SelectBox>
        ))
      }
      <div style={btnContainer}>
        <WriteBtn></WriteBtn>
      </div>
    </div>
  );
}


export default Moding