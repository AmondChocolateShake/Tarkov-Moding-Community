import React from 'react'

interface props{
  pageState:string
  setPageState:(page:string)=>void
}


//메인 컨텐츠 내부 선택된 태그와 글쓰기 버튼
const TagAndPost:React.FC<props>=(props)=>{
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

  //글쓰기 버튼 클릭시 호출되는 함수
  function postClicked(){
    //페이지 핸들러로 post 문자열을 보냄
    props.setPageState('post');
  }


  return(
    <div style={container}>
      <div>
        {}
      </div>


      <div style={post} onClick={postClicked}>
        <div>글쓰기</div>
      </div>
    </div>
  );
}

export default TagAndPost;