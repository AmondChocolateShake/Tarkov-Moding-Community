import React from 'react'

interface Items{
  items:object[]
}

//아이템 데이터를 객체 배열로 전달받아 동적으로 렌더링하는 컴포넌트
const OverLayBox:React.FC<Items>=(props)=>{

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'300px',
    minHeight:'300px',
  }

  return(
    <div style={container}>
      


    </div>
  );
}


export default OverLayBox;