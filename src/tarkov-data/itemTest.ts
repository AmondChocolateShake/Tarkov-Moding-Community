const fs=require('fs');


//총 이름을 담는 배열
let GunList=[''];
let GunIds=[0];
let categories=[''];
let itemList=[{}];

function addItemIntoList(item:object){
  itemList.push(item);
}


interface Gun{
  name:string,
  id:string,
  category:string,
}

let Guns:Gun[]=[{
  name:'',
  id:'',
  category:''
}]
interface Item3{
  categoryId:string,
  id:string,
  shortName:string,
  name:string|null,
  color:string|null,
  iconLink:string|null,
  imageLink:string|null,
  value:{
    value:number,
    currencyName:string,
  }|null,
  conflictingItemIds:string[]|null,
  ability:{
    caliber:string|null
    fireRate:number|null,
    ergonomics:number|null,
    verticalRecoil:number|null,
    horizontalRecoil:number|null,
    accuracyPercentageModifier:number|null,
    capacity:number|null,
    loadSpeedPercentageModifier:number|null,
    checkSpeedPercentageModifier:number|null,
    fleshDamage:number|null,
    penetrationPower:number|null,
    class:number[]|null,
    fragmentationChancePercentage:number|null
  },
  modSlots:{
    name:string,
    compatibleItemIds:string[],
  }[]|null
}

interface Item2{
  [key: string]: any,
  categoryId:string,
  id:string,
  shortName:string,
  name:string|null,
  color:string|null,
  iconLink:string|null,
  imageLink:string|null,
  value:{
    value:number,
    currencyName:string,
  }|null,
  conflictingItemIds:string[]|null,
  caliber:string|null
  fireRate:number|null,
  ergonomics:number|null,
  verticalRecoil:number|null,
  horizontalRecoil:number|null,
  accuracyPercentageModifier:number|null,
  capacity:number|null,
  loadSpeedPercentageModifier:number|null,
  checkSpeedPercentageModifier:number|null,
  fleshDamage:number|null,
  penetrationPower:number|null,
  class:number[]|null,
  fragmentationChancePercentage:number|null
  
  modSlots:{
    name:string,
    compatibleItemIds:string[],
  }[]|null
}

let items:Item2={
  categoryId:'',
  id:'',
  shortName:'',
  name:'',
  color:'',
  iconLink:'',
  imageLink:'',
  value:{
    value:0,
    currencyName:''
  },
  conflictingItemIds:[],
  caliber:'',
  fireRate:0,
  ergonomics:0,
  verticalRecoil:0,
  horizontalRecoil:0,
  accuracyPercentageModifier:0,
  capacity:0,
  loadSpeedPercentageModifier:0,
  checkSpeedPercentageModifier:0,
  fleshDamage:0,
  penetrationPower:0,
  class:[],
  fragmentationChancePercentage:0,
  modSlots:[{
    name:'',
    compatibleItemIds:[]
  }]
};


function addGunData(name:string,id:string,category:string){
  Guns.push({name:name,id:id,category:category})

}


//총 이름을 배열에 추가하는 함수
function addGun(gunName:string){
  GunList.push(gunName);

}

function addId(id:number){
  GunIds.push(id);

}


function addCategory(category:string){
  categories.push(category);

}

const filePath='./items.json';//아이템 정보가 들어있는 파일

fs.readFile(filePath,'utf8',(err:NodeJS.ErrnoException | null,data:any)=>{
  if(err){
    console.log('error occured');
    return;

  }

  try{
    const itemData=JSON.parse(data);
    
    console.log('successed');
    
    for(let i=0;i<1;i++){
      for(const data of itemData){
        // console.log(data);
        for(const item in data){
          if(item in items){
            items[item]=data[item];
          }
          // console.log(item);
        }
        addItemIntoList(items);

      }
    }
    console.log(itemList);
  }catch(err){
    console.error('failed to read : ',err);
  }

})





























// // 
// // 아이템 정보 from DB -> 클래스 -> 객체화 -> 페이지에 뿌리기
// // 
// // 
// // 
// // 
// interface ItemForm{
//   id:number,
//   shortName:string,
//   iconLink:string,
//   imgLink:string,
//   modSlot:{
//     slotName:string,
//     capatibleItems:string[],
//     item:ItemForm[]
//   }[]|null

// }

// class Item implements ItemForm{
//   id:number;
//   shortName:string;
//   iconLink:string;
//   imgLink:string;
//   modSlot:{
//     slotName:string,
//     capatibleItems:string[],
//     item:ItemForm[]
//   }[];

//   constructor(
//     id:number,
//     shortName:string,
//     iconLink:string,
//     imgLink:string,
//     modSlot:{
//       slotName:string,
//       capatibleItems:string[],
//       item:ItemForm[]
//     }[])
//   {
//     this.id=id;
//     this.shortName=shortName;
//     this.iconLink=iconLink;
//     this.imgLink=imgLink;
//     this.modSlot=modSlot;
//   }

//   getter() {

//     return{
//       id:this.id,
//       shortName:this.shortName,
//       iconLink:this.iconLink,
//       imgLink:this.iconLink,
//       modSlot:this.modSlot
//     }
//   }

//   setter(){


//   }

  
// }