import React from 'react'
import InputBox from './InputBox'
import LBtn from './LBtn'


//로그인 인풋과 버튼을 담은 박스 컴포넌트
const LoginBox:React.FC =()=>{
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'600px',
    height:'300px',
    backgroundColor:'#1E1E1E'
  }

  const formSt:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'70%',
    height:'150px'
  }

  const loginBoxSt:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    height:'100px'
  }
  const fontBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    color:'rgba(255,255,255,0.8)',
  }

  const InputContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    height:'100%'
  }

  return(
    <div style={container}>
      <form style={formSt}>
        <div style={fontBox}>
          <h2>ID</h2>
          <h2>PW</h2>
        </div>

        <div style={InputContainer}>
          <InputBox></InputBox>
          <InputBox></InputBox>
        </div>
      </form>

      <div style={loginBoxSt}>
        <LBtn text='Login'></LBtn>
        <LBtn text='Sign up'></LBtn>
      </div>

    </div>
  )
}

export default LoginBox