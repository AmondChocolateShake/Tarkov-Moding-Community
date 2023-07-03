import React, { useState } from 'react'
import { defaultMethod } from 'react-router-dom/dist/dom';
import PriceBox from './priceBox';
import Ability from './Ability';

interface Props{
  slotName:string,
  iconLink:string,
  shortName:string,
  name:string,

  ergo:number,
  recoil:number,
  
  price:{
    price:number,
    currency:string,
  }[]
}

// 게시글 상세 뷰 내 사용된 모드 파츠에 대한 인포 박스 입니다.
const ModInfoBox:React.FC<Props>=(props)=>{
  const[slotName,setSlotName]=useState(props.slotName);
  const[iconLink,setIconLink]=useState(props.iconLink);
  const[shortName,setShortName]=useState(props.shortName);
  const[name,setName]=useState(props.name);
  const[ergo,setErgo]=useState(props.ergo);
  const[recoil,setRecoil]=useState(props.recoil);
  const[price,setPrice]=useState(props.price);


  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    border:'1px solid white',
    width:'95%',
    height:'120px',
    marginTop:'15px',
    color:'white'

  }

  const iconBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'10%',
    height:'100%',
    borderRight:'1px solid white',
    
  }

  const nameBox:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'30%',
    height:'100%',
    borderRight:'1px solid white',
    fontSize:'20px'
  }

  const abilityBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'45%',
    height:'100%',
    borderRight:'1px solid white'
  }


  const priceContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    width:'15%',
    height:'100%',
  }


  return(
    <div style={container}>
      {/* 슬롯이름,아이콘,짧은이름 담는 컨테이너 */}
      <div style={iconBox}>
        {/* 슬롯이름 */}
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',}}>
          <div>{slotName}</div>
        </div>

        {/* 아이콘 */}
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          height:'63px'}}>
          <img style={{width:'63px',height:'63px'}} src={iconLink} alt="mod icon" />
        </div>

        {/* 짧은 이름 */}
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <div>{shortName}</div>
        </div>
      </div>

      {/* 전체 이름 */}
      <div style={nameBox}>
        <div>{name}</div>
      </div>

      {/* 성능 */}
      <div style={abilityBox}>
        {/* 에르고 */}
        <Ability name='Ergo' stat={ergo}></Ability>
        {/* 반동향상 퍼센트 */}
        <Ability name='Recoil' stat={recoil}></Ability>


      </div>

      {/* 가격 */}
      <div style={priceContainer}>
        {
          price.map((item,index)=>(
            <PriceBox price={item.price} currency={item.currency} key={index}></PriceBox>
          ))
        }
      </div>

    </div>
  );
}


export default ModInfoBox;