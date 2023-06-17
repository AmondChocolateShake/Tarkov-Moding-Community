import React,{useState,useEffect} from 'react'
import {getWeaponList} from '../global/global'
import WeaponName from './WeaponName';


//메인 페이지 왼쪽 총기 리스트 박스
const LeftMenu:React.FC=()=>{
  const[weapons,setWeapons]=useState(['']);

  useEffect(()=>{
    setWeapons(getWeaponList());
  },[]);

  const fRow:React.CSSProperties={
    display:'flex',
    flexDirection:'row'
  }
  const fColumn:React.CSSProperties={
    display:'flex',
    flexDirection:'column'
  }
  
  const jtfyctntCenter:React.CSSProperties={
    justifyContent:'center'
  }

  const jtfyctntSpcArnd:React.CSSProperties={
    justifyContent:'space-around'
  }
  const jtfyctntStart:React.CSSProperties={
    justifyContent:'flex-start'
  }

  const alignCenter:React.CSSProperties={
    alignItems:'center',
  }
  const Csize:React.CSSProperties={
    width:'200px',
    minHeight:'500px',
    border:'1px solid white',
    backgroundColor:'#1E1E1E'
  }

  const container={...fColumn,...jtfyctntCenter,...alignCenter,...Csize}

  return(
    <div style={container}>
      <div>
        {
          weapons.map((name,index)=>(
            <WeaponName name={name} key={index}></WeaponName>
          ))
        }
      </div>
    </div>
  );
}

export default LeftMenu

