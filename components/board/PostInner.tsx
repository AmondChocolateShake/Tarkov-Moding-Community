import React from 'react'
import TopInfoInPostInner from './TopInfoInPostInner';

export default function PostInner(){
  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100%'
  }

  return(
    <div style={container}>
      <TopInfoInPostInner></TopInfoInPostInner>
    </div>
  );
}