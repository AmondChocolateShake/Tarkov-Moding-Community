import React,{useEffect, useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'
import Board from '../board/Board'
import PostInner from '../board/PostInner'
import PostForm from '../board/PostForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

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
  const page=useSelector((state:RootState)=>{
    return state.page.page
  })
  const id=useSelector((state:RootState)=>{
    return state.page.id
  })

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
  


  return(
    <div style={container}>
      <div style={{color:"white"}}>{page+" : "+id}</div>
      {/* {props.pageState!=='posts'&&props.pageState!=='postView'&&<TagAndPost pageState={props.pageState} setPageState={props.setPageState}></TagAndPost>} */}
      {<ContentOfGuns></ContentOfGuns>}
      {/* {props.pageState==='post'&&<Post></Post>} */}
      {/* {props.pageState==='posts'&&<Board postIdHandler={postIdHandler} id={id}></Board>} */}
      {/* {postClicked===true&&flag&&<PostInner post={postData}></PostInner>} */}
    </div>
  );
};


export default MainContent;