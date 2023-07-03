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
  const[postData,setPostData]=useState({
    img:'',
    info:{
      price:0,
      ergo:0,
      vertical:0,
      horizontal:0
    },
    tags:[''],
    likes:0,
    context:''
  });



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
    props.setPageState('postView');
  }

  useEffect(()=>{
    fetch('/select_post',{
      method:'POST',
      headers:{
        'Context-Type':'application/json'
      },
      body:JSON.stringify({id:postId})
    })
    .then(response=>response.json())
    .then(data=>{

      // setPostData(data);
      console.log(data);
    })


  },[postClicked])


  return(
    <div style={container}>
      {props.pageState!=='posts'&&props.pageState!=='postView'&&<TagAndPost pageState={props.pageState} setPageState={props.setPageState}></TagAndPost>}
      {props.pageState==='main'&& <ContentOfGuns setId={setId} pageState={props.pageState} setPageState={props.setPageState}></ContentOfGuns>}
      {props.pageState==='post'&&<Post></Post>}
      {props.pageState==='posts'&&<Board postIdHandler={postIdHandler} id={id}></Board>}
      {postClicked===true&&<PostInner post={postData}></PostInner>}
    </div>

  );
};


export default MainContent;