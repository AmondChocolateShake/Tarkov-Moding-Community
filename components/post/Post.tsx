import React,{useState} from 'react'
import AddTagBox from './AddTagBox';
import Moding from './Moding';



//총기 모딩 게시글 작성 페이지
const Post:React.FC=()=>{
  const[mainWeaponId,setMainWeaponId]=useState('');
  const[partList,setPartList]=useState([''])
  const[modIds,setModIds]=useState(['']);
  const[totalData,setTotalData]=useState({
    price:0,
    ergo:0,
    recoil:0
  });
  const[tags,setTags]=useState(['']);
  const [formData, setFormData] = useState({
    title: '',
    context: '',
    tags:'',
    mainWeaponId:'',
    modIds:[''],
    price:0,
    ergo:0,
    recoil:0
    
  });

  

  
  const handleChange = (event:any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const container:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  }

  const titleSt:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'95%',
    height:'70px',
    borderBottom:'1px solid white'
  }

  const contextBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width:'95%',
    height:'250px',
    borderBottom:'1px solid white'
  }

  const contextInput:React.CSSProperties={
    width:'95%',
    height:'150px',
    backgroundColor:'#1e1e1e',
    border:'1px solid white',
    color:'white'
  }

  const tagContainer:React.CSSProperties={
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'95%',
    height:'50px'
    
  }
  const btnContainer:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    width:'90%',
    height:'100px'
  }


  const btnSt:React.CSSProperties={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100px',
    height:'50px',
    border:'3px solid white',
    borderRadius:'10px',
    color:'white',
    fontSize:'30px',
    backgroundColor:'#1e1e1e',
  }

  const setTotal=(price:number,ergo:number,recoil:number)=>{
    let obj={
      price:totalData.price+price,
      ergo:totalData.ergo+ergo,
      recoil:totalData.recoil+recoil
    }
    setTotalData(obj);

  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    
    setFormData({
      title: formData.title,
      context: formData.context,
      tags:formData.tags,
      mainWeaponId:mainWeaponId,
      modIds:partList,
      price:totalData.price,
      ergo:totalData.ergo,
      recoil:totalData.recoil
    })
    console.log(formData);
    fetch('/post_submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // 서버 응답 처리
      console.log(data);
    })
    .catch(error => {
      // 에러 처리
      console.error(error);
    });
  };


  return(
    <form onSubmit={handleSubmit}>
      <div style={container}>
        <div style={titleSt}>
          <h2 style={{color:'white'}}>제목 </h2>
          <input type='text' id='title' name='title' value={formData.title} onChange={handleChange}
          style={{
            width:'90%',
            backgroundColor:'#1E1E1E',
            border:'1px solid white',
            color:'white'
        }}></input>
        </div>
      
        <div style={contextBox}>
          <input type='text' id='context' name='context' value={formData.context} onChange={handleChange}
          style={contextInput}></input>
          <div style={tagContainer}>
            <h3 style={{color:'white'}}>태그</h3>
            <AddTagBox></AddTagBox>
          </div>
        </div>
        
        <Moding setTotal={setTotal} setMainId={setMainWeaponId} setPartList={setPartList}></Moding>

        <div style={btnContainer}>
          <button style={btnSt} type="submit">등록</button>
        </div>
      </div>
    </form>
  );
}

export default Post;