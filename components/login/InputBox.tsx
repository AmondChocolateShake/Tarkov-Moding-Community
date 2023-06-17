import React from 'react'




//로그인 및 회원가입에 쓰이는 인풋 컴포넌트
const InputBox:React.FC=()=>{



  const inputSt:React.CSSProperties={
    border:'1px solid black',
    height:'30px',
    width:'300px',
  }


  return(
        <div>
          <input style={inputSt}></input>
        </div>
  )
}

export default InputBox;