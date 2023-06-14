import React from 'react'

interface InputText{
  text:string
}


//로그인 및 회원가입에 쓰이는 인풋 컴포넌트
//props로 전달받은 텍스트는 인풋 왼쪽에 배치되어 인풋 용도 설명으로 쓰임
const InputBox:React.FC<InputText>=(props)=>{

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'700px',
    height:'60px',
    color:'rgba(255,255,255,0.8)'
  }

  const inputSt:React.CSSProperties={
    border:'1px solid black',
    height:'30px',
    width:'300px',
  }


  return(
    <div style={container}>
        <div>
          <h1>{props.text}</h1>
        </div>

        <div>
          <input style={inputSt}></input>
        </div>
    </div>
  )
}

export default InputBox;