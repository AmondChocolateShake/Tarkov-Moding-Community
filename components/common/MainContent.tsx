import React,{useEffect, useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'
import Board from '../board/Board'
import PostInner from '../board/PostInner'

interface props{
  pageState:string
  setPageState:(page:string)=>void
}

interface Post{
  post:{
    img:string,
    info:{
      price:number,
      ergo:number,
      vertical:number,
      horizontal:number
    },
    tags:string[],
    likes:number,
    context:string
  }
}


const MainContent:React.FC<props>=(props)=>{
  const[id,setId]=useState('');
  const[postId,setPostId]=useState(0);
  const[postClicked,setPostClicked]=useState(false);
  const[postData,setPostData]=useState({});
  const fRow:React.CSSProperties={
    display:'flex',
    flexDirection:'row'
  }
  const fColumn:React.CSSProperties={
    display:'flex',
    flexDirection:'column'
  }
  
  const jtfyctntCenter:React.CSSProperties={
    justifyContent:'center'
  }

  const jtfyctntSpcArnd:React.CSSProperties={
    justifyContent:'space-around'
  }

  const jtfyctntStart:React.CSSProperties={
    justifyContent:'flex-start'
  }

  const alignCenter:React.CSSProperties={
    alignItems:'center',
  }

  const Csize:React.CSSProperties={
    width:'80%',
    minHeight:'500px',
    height:'fit-content',
    backgroundColor:'#1E1E1E'
  }

  const container={...fColumn,...jtfyctntStart,...Csize}
  
  
  const postIdHandler=(id:number)=>{
    setPostId(id);
    setPostClicked(true);
  }

  useEffect(()=>{
    
  },[postClicked])


  return(
    <div style={container}>
      {props.pageState!=='posts'&&<TagAndPost pageState={props.pageState} setPageState={props.setPageState}></TagAndPost>}
      {props.pageState==='main'&& <ContentOfGuns setId={setId} pageState={props.pageState} setPageState={props.setPageState}></ContentOfGuns>}
      {props.pageState==='post'&&<Post></Post>}
      {props.pageState==='posts'&&<Board postIdHandler={postIdHandler} id={id}></Board>}
      {postClicked===true&&<PostInner post={}></PostInner>}
    </div>

  );
};


export default MainContent;