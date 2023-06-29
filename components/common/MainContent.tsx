import React,{useEffect, useState} from 'react'
import Post from '../post/Post'
import ContentOfGuns from './ContentOfGuns'
import TagAndPost from './TagAndPost'
import Board from '../board/Board'

interface props{
  pageState:string
  setPageState:(page:string)=>void
}

const MainContent:React.FC<props>=(props)=>{
  const[pageState2,setPageState2]=useState(props.pageState);
  
  function updatePageState(page:string){
    setPageState2(page);
  }

  useEffect(()=>{
    console.log('mainpage : '+props.pageState)
    updatePageState(props.pageState);
  },[props.pageState]);

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
      {pageState2!=='posts'&&<TagAndPost pageState={props.pageState} setPageState={props.setPageState}></TagAndPost>}
      {pageState2==='main'&& <ContentOfGuns pageState={props.pageState} setPageState={props.setPageState}></ContentOfGuns>}
      {pageState2==='post'&&<Post></Post>}
      {pageState2==='posts'&&<Board name='AK-101' id='5acf7dd986f774486e1281bf'></Board>}

    </div>

  );
};


export default MainContent;