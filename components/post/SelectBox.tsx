import React, { useEffect, useRef, useState } from 'react'
import ItemOverlay from './ItemOverlay'

interface Item{
  category:string,
  id:string,
  shortName:string,
  fullName:string,
  iconLink:string,
  color:string,

  price:number,
  currency:string,
  
  conflictItems:string[]|null,

    ammunitionType:string|null
    rpm:number|null,
    ergo:number|null,
    vertical:number|null,
    horizontal:number|null,
    accuracy:number|null,
    magazineCapacity:number|null,
    reloadSpeed:number|null,
    checkDuration:number|null,
    damage:number|null,
    penetrationPower:number|null,
    class:number[]|null,
    fragmentationChance:number|null

  modSlot:{
    slotName:string,
    capatibleItems:string[],
    item:Item
  }[]|null
}

interface item{
  item:{
categoryId:string,
id:string,
shortName:string,
name:string,
iconLink:string,
price:number|null,
currency:string|null,
conflictingitemIds:string[],
caliber:string,
fireRate:number,
ergonomics:number,
verticalRecoil:number,
horizontalRecoil:number,
accuracyPercentageModifier:number,
capacity:number,
loadSpeedPercentageModifier:number,
checkSpeedPercentageModifier:number,
fleshDamage:number,
penetrationPower:number,
class:null,
fragmentationChancePercentage:number,
modSlots:null}
}

interface Props{
  compatibleIds:string[]
  slotName:string
  setParts:(id:string)=>void
  setTotal:(
    price: number,
    ergo: number,
    recoil: number,
  )=>void
}


const SelectBox:React.FC<Props>=(props)=>{
  const[id,setId]=useState('');
  const[clicked,setClicked]=useState(false);
  const[compatibleIds,setCompatibleIds]=useState(props.compatibleIds);
  const[ergo,setErgo]=useState(0);
  const[recoil,setRecoil]=useState(0);
  const[price,setPrice]=useState(0);
  
  const[imgHidden,setImgHidden]=useState(true);
  const[item,setItem]=useState({
    imageLink:'',
    name:''
  });
  const[boxStyle,setBoxStyle]=useState({
    display:'flex',
    width:'400px',
    height:'100px',
    border:'1px solid white',
    borderRadius:'10px'
  });

  const innerBox:React.CSSProperties={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    width:'100%',
    height:'100px'

  }

  useEffect(()=>{
    if(id!==''){
      const query=`{
        item(id:`+"\""+id+"\""+`){
          name,
          inspectImageLink,
          ergonomicsModifier,
          recoilModifier,
          basePrice,
        }
      }`;
      console.log(query);
      fetch('https://api.tarkov.dev/graphql',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept': 'application/json',
        },
        body:JSON.stringify({query:query})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setItem({
          imageLink:data.data.item.inspectImageLink,
          name:data.data.item.name
        })
        if(data.data.item.ergonomicsModifier)setErgo(data.data.item.ergonomicsModifier);
        if(data.data.item.recoilModifier)setRecoil(data.data.item.recoilModifier);
        if(data.data.item.basePrice)setPrice(data.data.item.basePrice);
        
        props.setTotal(data.data.item.basePrice,data.data.item.ergonomicsModifier,data.data.item.recoilModifier);

        setImgHidden(false);
      })
      .catch(error => {
        // 오류 처리
        console.error('Fetch Error:', error);
      });
      
    }
  },[id])


  // useEffect(() => {
  //   const element = componentRef.current;
  //   const rect = element.getBoundingClientRect();
  //   const currentPosition = {
  //     x: rect.left,
  //     y: rect.top
  //   };
  //   console.log(currentPosition);
  // }, []);


  
  const container:React.CSSProperties={
    display:'flex',
    width:'90%',
    minHeight:'200px',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    color:'white'
  }

  const abilityBox:React.CSSProperties={
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'flex-start',
    marginLeft:'10px',
    height:'100%',
    width:'150px'
  }
  
  function clickHandler(){
    setClicked(true);
    console.log('item select component clicked');
  }

  const idHandler=(id:string)=>{
    setId(id);
    setClicked(false);
    props.setParts(id);
  }

  

  return(
    <div style={container}>
      <div>{props.slotName}</div>
        <div style={innerBox}>

        <div style={boxStyle} onClick={clickHandler}>
          <div style={{
            width:'33%',
            height:'100%',
            borderRight:'1px solid white',
          }}>
            {imgHidden!==true&&<img src={item.imageLink} alt="icon" style={{width:'100%',height:'100%',borderRadius:'10px'}}/>}
          </div>

          <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'57%'
            }}>{item.name}</div>
          <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'10%'
            }}>
            <div className='cross'></div>
          </div>

        </div>
        <div style={abilityBox}>
          <div>ergo : {ergo}</div>
          <div>recoil : {recoil}%</div>
          <div>price : {price}</div>
        </div>
      </div>

      {clicked&&<ItemOverlay idHandler={idHandler} compatibleIds={compatibleIds} openWindow={setClicked}></ItemOverlay>}

    </div>
    


  );
}

export default SelectBox