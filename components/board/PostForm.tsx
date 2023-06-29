import React from 'react'
import Tag from './Tag';
import {like} from '../../src/img/like_hand.png'
import {heart} from '../../src/img/heart.png'

interface PostData{
    imageLink:string,
    title:string,
    context:string,
    tags:string,
    ergo:number,
    vertical:number,
    horizontal:number,
    price:number,
    author:string,
    likes:number

}

const PostForm:React.FC<PostData>=(props)=>{

  console.log(props.title);

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    border:'1px solid white',
    width:'100%',
    height:'150px'
  }
  
  const contextBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    height:'95%',
    width:'300px',
    color:'white'
  }

  const infoBox:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height:'100%',
    width:'50%',
    color:'white'
  }


  const gunAbilityBox:React.CSSProperties={
    color:'white',
    width:'200px',
    height:'100%'
  }

  const interactContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  }


  return(
    <div style={container}>
      <div style={{width:'250px', height:'100%'}}>
        <img src={props.imageLink} alt="weaponImage" style={{width:'100%',height:'100%'}}/>
      </div>

      <div style={contextBox}>
        <div style={{width:'100%',height:'30px',fontSize:'25px'}}>{props.title}</div>
        <p>{props.context}</p>
      </div>

      <div style={infoBox}>
        <div style={gunAbilityBox}>
          <h2>에르고 {props.ergo}</h2>
          <h2>수직 반동 {props.vertical}</h2>
          <h2>수평 반동 {props.horizontal}</h2>
        </div>

        <div>가격 {props.price}</div>

        <div>
          <div style={interactContainer}>
            <div>
              <img src={like} alt="like" />
              <div>{props.likes}</div>
            </div>

            <div >
              <img src={heart} alt="heart" />
            </div>
          </div>

          <div>작성자 {props.author}</div>
        </div>
      </div>

    </div>
  );
}

export default PostForm;