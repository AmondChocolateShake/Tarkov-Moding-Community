import React,{useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'
import Board from '../board/Board'

const MainContent:React.FC=()=>{
  const[pageState,setPageState]=useState('posts');
  const[gun,setGun]=useState('AK-101');



  const pageChangedto=(page:string)=>{
    if(page==='post'){
      setPageState('post');
    }else if(page==='main'){
      setPageState('main');
    }else if(page==='board'){
      setPageState('board');
    }else{
      console.log("꺼져");
    }
  }
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
    width:'70%',
    minHeight:'500px',
    backgroundColor:'#1E1E1E'
  }

  const container={...fColumn,...jtfyctntStart,...Csize}
  return(
    <div style={container}>
      {pageState!=='posts'&&<TagAndPost handler={pageChangedto}></TagAndPost>}
      {pageState==='main'&& <ContentOfGuns></ContentOfGuns>}
      {pageState==='post'&&<Post></Post>}
      {pageState==='posts'&&<Board name='AK-101' id='5acf7dd986f774486e1281bf'></Board>}
    </div>

  );
}


export default MainContent