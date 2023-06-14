import React from 'react'
import LoginBox from './LoginBox';




function Login(){
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'100vw',
    height:'100vh'
  }
  return(
    <div style={container}>
      <LoginBox></LoginBox>

    </div>
  )

}

export default Login;

