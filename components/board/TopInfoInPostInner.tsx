import React, { useState } from 'react'
import Tag from './Tag'

interface Post{
  img:string,
  info:{
    price:number,
    ergo:number,
    vertical:number,
    horizontal:number
  },
  tags:string[],
  likes:number,
  context:string
}


//게시글 클릭시 나타나는 PostInner 컴포넌트의 상단 정보 박스 컴포넌트
const TopInfoInPostInner:React.FC<Post>=(props)=>{
  const[img,setImg]=useState(props.img);
  const[info,setInfo]=useState(props.info);
  const[tags,setTags]=useState(props.tags);
  const[likes,setLikes]=useState(props.likes);
  const[context,setContext]=useState(props.context);

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'80%'
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
    height:'150px'
  }

  const imgAndNumBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'center',
    width:'80%',
    height:'80%'

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

  const contextBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    width:'100%',
    minHeight:'200px',
    borderBottom:'1px solid white'
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
          <div style={{width:'200px',height:'100%'}}>
            <img style={{width:'100%',height:'100%'}} src={img} alt="weapon icon"/>
          </div>

          <div style={numAndTagBox}>
            {/* //가격,성능 */}
            <div style={numBox}>
              {/* 가격 */}
              <div>가격 : {info.price}</div>
              {/* 에르고 */}
              <div>에르고 : {info.ergo}</div>
              {/* 수직반동 */}
              <div>수직반동 : {info.vertical}</div>
              {/* 수평반동 */}
              <div>수직반동 : {info.horizontal}</div>
            </div>

            {/* //태그 */}
            <div style={tagBox}>
              {
                tags.map((item,index)=>(
                  <Tag tagName={item} key={index}></Tag>
                ))
              }
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
      <div style={contextBox}>
        <div>{props.context}</div>
      </div>

    </div>
  )
}

export default TopInfoInPostInner;