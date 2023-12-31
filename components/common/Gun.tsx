import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { goToPosts } from '../../redux/pageSlicer'

interface GunData{
  gunImg:string
  gunName:string
  id:string
}


const Gun:React.FC<GunData>=(props)=>{
  const [id,setId]=useState(props.id);
  const dispatch=useDispatch();



  //총기 클릭 이벤트 발생시 상태를 변경하는 함수
  const ClickEventhandler=()=>{
    dispatch(goToPosts(id));
  }





  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'300px',
    height:'200px',
    marginTop:'10px'
  }

  return(
    <div style={container} onClick={ClickEventhandler}>
      <div>
        <img src={props.gunImg} alt="" style={{width:'250px',height:'150px', border:'2px solid rgba(255,255,255,0.5)', borderRadius:'10px'}}/>
      </div>
      <div style={{color:'white',width:'250px',height:'50px'}}>{props.gunName}</div>
    </div>
  );
}

export default Gun;