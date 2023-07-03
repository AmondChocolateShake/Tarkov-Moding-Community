import React from 'react'
import { defaultMethod } from 'react-router-dom/dist/dom';
import PriceBox from './priceBox';



// 게시글 상세 뷰 내 사용된 모드 파츠에 대한 인포 박스 입니다.
const ModInfoBox=()=>{
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
          <div>scope</div>
        </div>

        {/* 아이콘 */}
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          width:'100%',
          height:'63px'}}>
          <img style={{width:'63px',height:'63px'}} src="https://assets.tarkov.dev/58491f3324597764bc48fa02-icon.webp" alt="mod icon" />
        </div>

        {/* 짧은 이름 */}
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <div>XPS3-0</div>
        </div>
      </div>

      {/* 전체 이름 */}
      <div style={nameBox}>
        <div>EOTech XPS3-0 holographic sight</div>
      </div>

      {/* 성능 */}
      <div style={abilityBox}>
        {/* 에르고 */}
        <div>ergo : 60</div>
        {/* 반동향상 퍼센트 */}
        <div>recoil: 50</div>


      </div>

      {/* 가격 */}
      <div style={priceContainer}>
        <PriceBox price={10000} currency='RUB'></PriceBox>
        <PriceBox price={10000} currency='USD'></PriceBox>
        <PriceBox price={10000} currency='EUR'></PriceBox>
      </div>

    </div>
  );
}


export default ModInfoBox;