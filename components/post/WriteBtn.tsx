import React from 'react'

//게시글 작성 부 등록 버튼
const WriteBtn:React.FC=()=>{

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100px',
    height:'50px',
    border:'3px solid white',
    borderRadius:'10px',
    color:'white',
    fontSize:'30px',
    backgroundColor:'#1e1e1e',

  }
  return(
    <form>
      <button style={container} type="submit">등록</button>
    </form>
  );
}

export default WriteBtn;