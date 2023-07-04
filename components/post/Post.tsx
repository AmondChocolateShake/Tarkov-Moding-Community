import React,{useState} from 'react'
import AddTagBox from './AddTagBox';
import Moding from './Moding';



//총기 모딩 게시글 작성 페이지
const Post:React.FC=()=>{
  const[modData,setModData]=useState();

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  }

  const titleSt:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'95%',
    height:'70px',
    borderBottom:'1px solid white'
  }

  const contextBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'95%',
    height:'250px',
    borderBottom:'1px solid white'
  }

  const contextInput:React.CSSProperties={
    width:'95%',
    height:'150px',
    backgroundColor:'#1e1e1e',
    border:'1px solid white',
    color:'white'
  }

  const tagContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'95%',
    height:'50px'
    
  }

  let ids=[]
  const addId=(id:string)=>{
    ids.push(id);

  }

  return(
    <div style={container}>
      <div style={titleSt}>
        <h2 style={{color:'white'}}>제목 </h2>
        <input style={{
          width:'90%',
          backgroundColor:'#1E1E1E',
          border:'1px solid white',
          color:'white'
      }}></input>
      </div>

      <div style={contextBox}>
        <input style={contextInput}></input>
        <div style={tagContainer}>
          <h3 style={{color:'white'}}>태그</h3>
          <AddTagBox></AddTagBox>
        </div>
      </div>
      
      <Moding addId={addId}></Moding>

    </div>
  );
}

export default Post;