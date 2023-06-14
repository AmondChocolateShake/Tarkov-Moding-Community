import React from 'react'
import InputBox from './InputBox'
import LBtn from './LBtn'

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
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'150px'
  }

  const loginBoxSt:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    height:'100px'
  }

  return(
    <div style={container}>
      <form style={formSt}>
        <InputBox text='ID'></InputBox>
        <InputBox text='PW'></InputBox>
      </form>

      <div style={loginBoxSt}>
        <LBtn text='Login'></LBtn>
        <LBtn text='Sign up'></LBtn>
      </div>

    </div>
  )
}

export default LoginBox