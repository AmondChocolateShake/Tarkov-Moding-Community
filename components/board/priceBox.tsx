import React, { useState } from 'react'

interface Props{
  price:number,
  currency:string
}

const PriceBox:React.FC<Props>=(props)=>{
  const[price,setPrice]=useState(props.price);
  const[currency,setCurrency]=useState(props.currency);



  const priceBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'90%',
    height:'15px',
    color:'white',
    fontSize:'20px'
  }

  return(
    <div style={priceBox}>
      <div>{price}</div>
      <div>{currency}</div>
    </div>
  )
}

export default PriceBox;