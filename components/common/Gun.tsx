import React, { useState } from 'react'

interface GunData{
  gunImg:string
  gunName:string
  id:string
}


const Gun:React.FC<GunData>=(props)=>{

  //총기 클릭 이벤트 발생시 상태를 변경하는 함수
  const ClickEventhandler=()=>{
    // props.setPageState('posts');
    // props.setId(props.id);
    // console.log(props.id);
  }




  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'300px',
    height:'200px',
  }

  return(
    <div style={container} onClick={ClickEventhandler}>
      <div>
        <img src={props.gunImg} alt="" style={{width:'250px',height:'150px'}}/>
      </div>
      <div style={{color:'white'}}>{props.gunName}</div>
    </div>
  );
}

export default Gun;