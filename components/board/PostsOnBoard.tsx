import React, { useEffect, useState } from 'react'
import PostForm from './PostForm';

interface props{
  id:string
  postIdHandler:(id:number)=>void
}



const PostsOnBoard:React.FC<props>=(props)=>{
  const[id,setId]=useState(props.id);
  const[posts,setPosts]=useState([] as any);
  const[flag,setFlag]=useState(0);
  useEffect(()=>{
    fetch('/select_post',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify({id:id}),
    })
    .then(response => response.json())
    .then(data => {
    // 서버로부터 받은 데이터 처리
      setPosts(data);
      console.log(data);
    })
    .catch(error => {
    // 에러 처리
      console.error('에러 발생:', error);
    });

  },[])

  useEffect(()=>{
    console.log(posts);
    setFlag(1);
  },[posts])

  return(
    <div>
      {flag===1&&
          posts.map((item:any,index:any)=>(
            <PostForm 
            postIdHandler={props.postIdHandler}
            imageLink={item.imageLink}
            title={item.title}
            context={item.context}
            tags={item.tags}
            ergo={item.ergonomics}
            vertical={item.verticalRecoil}
            horizontal={item.horizontalRecoil}
            price={item.price}
            author={item.author}
            likes={item.likes}
            key={index}
            postId={item.postId}
            ></PostForm>
          ))
        }
      
    </div>
  );
}

export default PostsOnBoard;