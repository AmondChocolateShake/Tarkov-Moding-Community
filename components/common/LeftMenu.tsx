import React,{useState,useEffect} from 'react'
import WeaponName from './WeaponName';

interface weaponList{
  Guns:{
    shortName:string,
    imageLink:string,
    id:string,
    
  }[]
}

//메인 페이지 왼쪽 총기 리스트 박스
const LeftMenu:React.FC<weaponList>=({Guns})=>{
  const[guns,setGuns]=useState(Guns)

  useEffect(()=>{
    fetch('/all_gun_short_name',{
      method:'POST',
      headers:{
        'Context-Type':'application/json'
      }
  })
    .then(response=>response.json())
    .then(data=>{
      console.log( 'leftmenu2 :'+data);
      setGuns(data);
    })
    .catch(error=>{
      console.error(error);
    })
  },[]);

  useEffect(()=>{
    console.log('left menu : '+guns);
  },[guns])


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

  const container={...fColumn,...jtfyctntStart,...alignCenter,...Csize}
  const listSt={...fColumn,...alignStart,...listSize}

  return(
    <div style={container}>
      <div style={listSt}>
        {guns&&
            guns.map((item,index)=>(
            <WeaponName name={item.shortName} key={index}></WeaponName>
          ))
        }
      </div>
    </div>
  );
}

export default LeftMenu

