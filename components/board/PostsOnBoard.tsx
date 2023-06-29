import React, { useEffect, useState } from 'react'
import PostForm from './PostForm';

interface props{
  id:string
}

const PostsOnBoard:React.FC<props>=(props)=>{
  const[id,setId]=useState('5acf7dd986f774486e1281bf');
  const[posts,setPosts]=useState();
  useEffect(()=>{
    fetch('/select_post',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:id,
    })
    .then(response => response.json())
    .then(data => {
    // 서버로부터 받은 데이터 처리
      console.log(data);
      setPosts(data);

    })
    .catch(error => {
    // 에러 처리
      console.error('에러 발생:', error);
    });

    console.log(posts);
  },[])


  return(
    <div>
      {
        
        // <PostForm data={}></PostForm>
      }
    </div>
  );
}

export default PostsOnBoard;