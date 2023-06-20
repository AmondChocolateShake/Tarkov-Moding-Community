import React,{useState,ChangeEvent,FormEvent} from 'react'

interface Item{
  category:string,
  id:string,
  shortName:string,
  fullName:string,
  color:string,
  iconLink:string,
  value:{
    price:number,
    currency:string,
  }|null,
  conflictItems:string[]|null,
  ability:{
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
  },
  modSlot:{
    slotName:string,
    capatibleItems:string[],
    item:Item|null
  }[]|null
}



const Dev:React.FC=()=>{
  const[form,setFormData]=useState({
    category:null,
    id:null,
    shortName:null,
    fullName:null,
    color:null,
    iconLink:null,
    price:null,
    currency:null,
    conflictItems:null,
    ammunitionType:null,
    rpm:null,
    ergo:null,
    vertical:null,
    horizontal:null,
    accuracy:null,
    magazineCapacity:null,
    reloadSpeed:null,
    checkDuration:null,
    damage:null,
    penetrationPower:null,
    class:null,
    fragmentationChance:null,

  });
  const[modSlot,setModSlot]=useState({
    slotName:null,
    capatibleItems:[],
    id:null
  })


  const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    if(value===''){
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: null,
      }));
      console.log({name},{value});
    }else{
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
      console.log({name},{value});
    }
    console.log(form);
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    // 여기에서 원하는 작업 수행


fetch('/data', {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(form)
})
  .then(response => {
    // 응답 처리
    console.log('성공');
  })
  .catch(error => {
    // 에러 처리
  });
  };

  return(
    <form onSubmit={handleSubmit}>
      <div style={{color:'white'}}>
        <p>category</p>
        <input
        onChange={handleInputChange}
        name='category'/>

        <p>id</p>
        <input
        onChange={handleInputChange}

        name='id'/>

        <p>shortName</p>
        <input
        onChange={handleInputChange}

        name='shortName'/>

        <p>fullName</p>
        <input
        onChange={handleInputChange}

        name='fullName'/>

        <p>color</p>
        <input
        onChange={handleInputChange}

        name='color'/>

        <p>iconLink</p>
        <input
        onChange={handleInputChange}

        name='iconLink'/>

        <p>price</p>
        <input
        onChange={handleInputChange}

        name='price'/>

        <p>currency</p>
        <input
        onChange={handleInputChange}

        name='currency'/>

        <p>conflictItems</p>
        <input
        onChange={handleInputChange}

        name='conflictItems'/>

        <p>ammunitionType</p>
        <input
        onChange={handleInputChange}

        name='ammunitionType'/>

        <p>rpm</p>
        <input
        onChange={handleInputChange}

        name='rpm'/>

        <p>ergo</p>
        <input
        onChange={handleInputChange}

        name='ergo'/>

        <p>vertical</p>
        <input
        onChange={handleInputChange}

        name='vertical'/>

        <p>horizontal</p>
        <input
        onChange={handleInputChange}

        name='horizontal'/>

        <p>accuracy</p>
        <input
        onChange={handleInputChange}

        name='accuracy'/>

        <p>magazineCapacity</p>
        <input
        onChange={handleInputChange}

        name='magazineCapacity'/>

        <p>reloadSpeed</p>
        <input
        onChange={handleInputChange}

        name='reloadSpeed'/>

        <p>checkDuration</p>
        <input
        onChange={handleInputChange}

        name='checkDuration'/>

        <p>damage</p>
        <input
        onChange={handleInputChange}

        name='damage'/>

        <p>penetrationPower</p>
        <input
        onChange={handleInputChange}

        name='penetrationPower'/>

        <p>class</p>
        <input
        onChange={handleInputChange}

        name='class'/>

        <p>fragmentationChance</p>
        <input
        onChange={handleInputChange}

        name='fragmentationChance'/>


      </div>
        <button type='submit' style={{width:'100px',height:'30px'} }>submit</button>
    </form>

  );
}

export default Dev;