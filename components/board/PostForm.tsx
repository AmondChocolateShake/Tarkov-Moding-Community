import React from 'react'
import Tag from './Tag';

interface PostData{
  iconLink:string,
  title:string,
  context:string,
  tags:string[],
  ergo:number,
  vertical:number,
  horizontal:number,
  price:number,
  author:string,
  likes:number

}

const PostForm:React.FC<PostData>=(props)=>{
  



  return(
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2></h2>
        <div></div>
        <div>
          {props.tags.map((item,index)=>(
            <Tag
            tagName={item}
            key={index}
            ></Tag>
          ))}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PostForm;