import React from 'react'
import Tag from './Tag'

//게시글 클릭시 나타나는 PostInner 컴포넌트의 상단 정보 박스 컴포넌트
const TopInfoInPostInner:React.FC=(props)=>{


  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100%'
  }

  const titleBox:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-start',
    width:'100%',
    height:'40px',
    alignItems:'center',
    borderBottom:'1px solid white'
  }

  const totalBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottom:'1px solid white',
    width:'100%',
    height:'100px'
  }

  const imgAndNumBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center',
    width:'80%',
    height:'95%'

  }

  const numAndTagBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignContent:'center',
    height:'100%',
    width:'75%'
  }

  const numBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center',
    height:'30%',
    width:'100%',
    color:'white',
    fontSize:'18px'
  }

  const tagBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignContent:'center',
    height:'30%',
    width:'100%',
  }

  return(
    <div style={container}>
      {/* //제목 */}
      <div style={titleBox}>
        <div style={{color:'white',fontSize:'20px'}}>가성비 모딩입니다.</div>
      </div>

      {/* //모딩 데이터 최종값 */}
      <div style={totalBox}>
        
        <div style={imgAndNumBox}>
          {/* //총기 이미지 */}
          <div style={{width:'150px',height:'100%'}}>
            <img style={{width:'100%',height:'100%'}} src="https://assets.tarkov.dev/59e8d2ab86f77407f03fc9c2-image.webp" alt="weapon icon"/>
          </div>

          <div style={numAndTagBox}>
            {/* //가격,성능 */}
            <div style={numBox}>
              {/* 가격 */}
              <div>가격 : 300000</div>
              {/* 에르고 */}
              <div>에르고 : 70</div>
              {/* 수직반동 */}
              <div>수직반동 : 40</div>
              {/* 수평반동 */}
              <div>수직반동 : 100</div>
            </div>

            {/* //태그 */}
            <div style={tagBox}>
              <Tag tagName='가성비'></Tag>
              <Tag tagName='가성비'></Tag>
              <Tag tagName='가성비'></Tag>

            </div>
          </div>
        </div>


        <div>
          {/* 즐겨찾기 */}
          <div></div>

          {/* 좋아요 */}
          <div></div>
        </div>
      </div>

      {/* //본문 */}
      <div>{}</div>

    </div>
  )
}

export default TopInfoInPostInner;