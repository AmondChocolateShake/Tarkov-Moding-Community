import React from 'react'


interface BtnText{
  text:string
}



//로그인,회원가입 등에 쓰이는 버튼
const LBtn:React.FC<BtnText>=(props)=>{
  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border:'2px solid white',
    borderRadius:'30px',
    backgroundColor:'1E1E1E',
    width:'100px',
    height:'30px',
    color:'rgba(255,255,255,0.8)'
  }


  return(
    <div style={container}>
      <div>{props.text}</div>
    </div>
  )

}


export default LBtn