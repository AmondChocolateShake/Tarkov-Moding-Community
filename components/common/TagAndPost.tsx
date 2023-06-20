import React from 'react'

//메인 컨텐츠 내부 선택된 태그와 글쓰기 버튼
const TagAndPost=()=>{
  const post:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'70px',
    height:'30px',
    color:'white',
    border:'1px solid white',
    borderRadius:'10px'
  }

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'95%',
    height:'70px',
    borderBottom:'1px solid white',
    alignSelf:'center'
  }
  return(
    <div style={container}>
      <div>
        {}
      </div>

      <div style={post}>
        <div>글쓰기</div>
      </div>
    </div>
  );
}

export default TagAndPost;