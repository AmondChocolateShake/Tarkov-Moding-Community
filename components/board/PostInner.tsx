import React , {useEffect, useState}from 'react'
import TopInfoInPostInner from './TopInfoInPostInner';
import ModList from './ModList';


interface Props{
  mods:{
    slotName:string,
    iconLink:string,
    shortName:string,
    name:string,

    ergo:number,
    recoil:number,
    
    price:{
      price:number,
      currency:string,
    }[]
  }[]
}

interface Post{
  post:{
    postId:number,
    title:string,
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


//게시글 상세 뷰 컴포넌트
const PostInner:React.FC<Post>=(props)=>{
  const[post,setPost]=useState(props.post);
  const[title,setTitle]=useState(post.title);
  const[img,setImg]=useState(post.img);
  const[info,setInfo]=useState(post.info);
  const[tags,setTags]=useState(post.tags);
  const[likes,setLikes]=useState(post.likes);
  const[context,setContext]=useState(post.context);
  const[postId,setPostId]=useState(post.postId);
  const[modList,setModList]=useState([]);
  const[flag,setFlag]=useState(false);

  useEffect(()=>{
    fetch('/get_mod_list',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({postId:postId})
    })
    .then(res=>res.json())
    .then(data=>{

      console.log(data)
      setModList(data);
      setFlag(true);
    })
  },[post])


  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100%'
  }

  const ModsContainer:React.CSSProperties={
    display:'felx',
    justifyContent:'center',
    alignContent:'center',
    width:'100%',
    height:'fit-content'
  }

  return(
    <div style={container}>
      {flag&&<TopInfoInPostInner title={title} img={img} info={info} tags={tags} likes={likes} context={context}></TopInfoInPostInner>}
      <div style={ModsContainer}>
        {/* 모드 리스트를 props로 넘겨야함 */}
        {flag&&<ModList mods={modList}></ModList>}
      </div>
    </div>
  );
}



export default PostInner;