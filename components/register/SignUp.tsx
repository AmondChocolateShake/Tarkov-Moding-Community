import React from 'react'
import SignUpBox from './SignUpBox'
import Logo from '../../src/img/tarkov_logo.png'

//회원가입 페이지
const SignUp:React.FC=()=>{
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  }
  return(
    <div style={container}>
      <img src={Logo} alt="Logo" />
      <SignUpBox></SignUpBox>
    </div>

  )
}

export default SignUp