import React,{useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'

const MainContent:React.FC=()=>{
  const[pageState,setPageState]=useState('main');

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
      <TagAndPost handler={pageChangedto}></TagAndPost>
      {pageState==='main'&& <ContentOfGuns></ContentOfGuns>}
      {pageState==='post'&&<Post></Post>}
    </div>

  );
}


export default MainContent