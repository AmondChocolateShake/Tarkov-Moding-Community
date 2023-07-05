import React,{useEffect, useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'
import Board from '../board/Board'
import PostInner from '../board/PostInner'
import PostForm from '../board/PostForm'

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
  const[flag,setFlag]=useState(false);
  const[postData,setPostData]=useState({  
    postId:0,
    title:'',  
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
    console.log(id);
    setPostClicked(true);
    props.setPageState('postView');
  }
  

  useEffect(()=>{
    if(props.pageState==='postView'){

    }else{
      setPostClicked(false);
    }
  },[props.pageState])

  
  useEffect(()=>{
    if(postClicked){
      fetch('/post_data',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({postId:postId})
      })
      .then(response=>response.json())
      .then(postData=>{
        console.log(postData);
        const tags=postData[0].tags.split(',');
        const post={
          postId:postData[0].postId,
          title:postData[0].title,
          img:postData[0].imageLink,
          info:{
            price:postData[0].price,
            ergo:postData[0].ergomics,
            vertical:postData[0].verticalRecoil,
            horizontal:postData[0].horizontalRecoil
          },
          tags:tags,
          likes:postData[0].likes,
          context:postData[0].context
        }
        console.log(post);  
        setPostData(post);
        setFlag(true);
      })
    }
    

  },[postClicked])


  return(
    <div style={container}>
      {props.pageState!=='posts'&&props.pageState!=='postView'&&<TagAndPost pageState={props.pageState} setPageState={props.setPageState}></TagAndPost>}
      {props.pageState==='main'&& <ContentOfGuns setId={setId} pageState={props.pageState} setPageState={props.setPageState}></ContentOfGuns>}
      {props.pageState==='post'&&<Post></Post>}
      {props.pageState==='posts'&&<Board postIdHandler={postIdHandler} id={id}></Board>}
      {postClicked===true&&flag&&<PostInner post={postData}></PostInner>}
    </div>
  );
};


export default MainContent;