import React, { useState } from 'react'

interface Props{
  name:string,
  stat:number
}


// 게시글 상세 뷰 -> 모드 슬롯 내부 -> 아이템 효과를 표시하는 컴포넌트
//에르고,반동,총알 효과 등등
const Ability:React.FC<Props>=(props)=>{
  const[name,setName]=useState(props.name);
  const[stat,setStat]=useState(props.stat);

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    marginLeft:'10px',
    fontSize:'18px'
  }
  return(
    <div style={container}>
      <div>{name} : </div>
      <div>{stat}</div>
    </div>
  );
}

export default Ability;