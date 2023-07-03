import React , {useState}from 'react'
import TopInfoInPostInner from './TopInfoInPostInner';
import ModList from './ModList';

export default function PostInner(){
  const[img,setImg]=useState('');
  const[info,setInfo]=useState({
    price:0,
    ergo:0,
    vertical:0,
    horizontal:0
  });
  const[tags,setTags]=useState([]);
  const[likes,setLikes]=useState(0);
  const[context,setContext]=useState('');




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
      <TopInfoInPostInner img={img} info={info} tags={tags} likes={likes} context={context}></TopInfoInPostInner>
      <div style={ModsContainer}>
        <ModList></ModList>
      </div>

    </div>
  );
}