import React , {useState}from 'react'
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
  
  //모드리스트에 넣을 모드 데이터 객체 배열 저장 공간
  const[modList,setModList]=useState();



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
      <TopInfoInPostInner title={title} img={img} info={info} tags={tags} likes={likes} context={context}></TopInfoInPostInner>
      <div style={ModsContainer}>
        {/* 모드 리스트를 props로 넘겨야함 */}
        {/* <ModList mods={modList}></ModList> */}
      </div>
    </div>
  );
}



export default PostInner;