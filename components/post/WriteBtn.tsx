import React from 'react'

//게시글 작성 부 등록 버튼
const WriteBtn:React.FC=()=>{

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100px',
    height:'50px',
    border:'1px solid white',
    borderRadius:'10px',
    color:'white',
    fontSize:'30px'
  }
  return(
    <div style={container}>
      <div>등록</div>
    </div>
  );
}

export default WriteBtn;