import React from 'react'


interface GunData{
  gunImg:string,
  gunName:string
}
const Gun:React.FC<GunData>=(props)=>{

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'300px',
    height:'200px'
  }

  return(
    <div style={container}>
      <div>
        <img src={props.gunImg} alt="" style={{width:'250px',height:'150px'}}/>
      </div>
      <div style={{color:'white'}}>{props.gunName}</div>
    </div>
  );
}

export default Gun;