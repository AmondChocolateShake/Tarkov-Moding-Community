import React,{useState,useEffect} from 'react'
import WeaponName from './WeaponName';

interface weaponList{
  Guns:{
    name:string,
    imgLink:string
  }[]
}

//메인 페이지 왼쪽 총기 리스트 박스
const LeftMenu:React.FC<weaponList>=(props)=>{
  

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
  const alignStart:React.CSSProperties={
    alignItems:'flex-start',
  }
  const Csize:React.CSSProperties={
    width:'200px',
    minHeight:'500px',
    backgroundColor:'#1E1E1E'
  }
  const listSize:React.CSSProperties={
    width:'90%',
    minHeight:'90%',
    
  }

  const container={...fColumn,...jtfyctntCenter,...alignCenter,...Csize}
  const listSt={...fColumn,...alignStart,...listSize}

  return(
    <div style={container}>
      <div style={listSt}>
        {
          props.Guns.map(item=>(
            <WeaponName name={item.name}></WeaponName>
          ))
        }
      </div>
    </div>
  );
}

export default LeftMenu

