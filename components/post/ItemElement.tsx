import React from 'react'



const ItemElement=()=>{

  const container:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'80px',
    backgroundColor:'#1E1E1E',
    border:'1px solid #ACA891'
  }

  return(
    <div style={container}>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <div>{}</div>
      </div>

    </div>
  );
}

export default ItemElement;