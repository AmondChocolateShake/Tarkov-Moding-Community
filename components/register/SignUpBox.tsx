import React from 'react'
import {Link} from 'react-router-dom'
import InputBox from '../login/InputBox'
import LBtn from '../login/LBtn'

//회원가입 인풋을 담고있는 박스 컴포넌트
const SignUpBox:React.FC=()=>{
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#1E1E1E',
    width:'600px',
    height:'400px'
  }

  const innerCtnr:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    color:'rgba(255,255,255,0.8)',
    width:'400px'
  }

  const inputContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    height:'250px'
  }

  return(
    <div style={container}>
      <div style={innerCtnr}>
        <div>
          <h2>ID</h2>
          <h2>PW</h2>
          <h2>PW check</h2>
          <h2>Email</h2>
        </div>

        <div style={inputContainer}>
          <InputBox></InputBox>
          <InputBox></InputBox>
          <InputBox></InputBox>
          <InputBox></InputBox>
        </div>
        
      </div>
      <Link to='/login'>
        <LBtn text='Sign up'></LBtn>
      </Link>

    </div>
  )
}

export default SignUpBox