const weaponList:string[]=[
'm4a1',
'ak47',
]

const modNames=[
  'chamber',
  'scope',
  'barrel',
  'receiver',
  'handguard',
  'stock',
  'magazine',
  'ammo',
  'rear sight',
  'gasblock',
  'muzzle',
  'charging handle'
]



/** 2023.06.14 2차시도 */

//파츠 기본 구조
interface Part{
  id:string,//아이템 id
  conflictItems:string[],//충돌 아이템 id리스트
  modSlot:{//모드 슬롯
    slotName:string,//모딩 슬롯 이름
    capabilityItems:string[],//사용 가능 아이템 id리스트
    item:Part//파츠 기본 데이터
  }[]|null
}

//총기 프리셋 기본 구성
interface Gun{
  id:string,//총기 id
  modSlot:{//모드 슬롯 배열
    slotName:string,//모드 슬롯 이름
    capabilityItems:string[]|null,//사용 가능 아이템 id리스트
    item:Part|null//파츠 기본 데이터
  }[]|null
}
////////이거 써야함
// const m4a1:Gun={
//   id:'m4a1',
//   modSlot:[
//     {
//       slotName:'Chamber',
//       capabilityItems:['855a1','856a1','995','FMJ'],
//       item:{
//         id:'855a1',
//         conflictItems:[],
//         modSlot:null
//       }
//     },
//     {

//     }
//   ]
// }
/////////

// class item implements Part{
//   id;
//   conflictItems;
//   modSlot= [
//     { 
//       slotName;
//       capabilityItems: string[]; 
//       item: Part 
//     }
//   ]

//   constructor(id:string, conflictItems:string[], modSlot:{slotName: string, capabilityItems: string[], item: Part }[]){
//     this.id=id;
//     this.conflictItems=conflictItems;
//     this.modSlot
//   }
// }




























/** 2023.06.14 시도 */
// interface PartStructure{
//   id:string,
//   capabilityItems:string[],
//   conflictItems:string[],
//   modSlot:Part[],
//   slotName:string  
// }





//파츠 데이터 기본 형식
// interface Part{
//   modName:string
//   itemName:string,
//   itemId:string
//   modSlot:Part[]|null,
//   conflictItemsID:string[],
// }

//총 구조도 코드
//확장성 고려할것
// interface Gun{
//   name:string,
//   id:string,
  // chamber:{
  //   use:boolean,
  //   modSlot:Part,
  //   capabilityItems:[]

  // },
  // stock:{
  //   use:boolean
  //   modSlot:Part
  // },
  // receiver:{
  //   use:boolean
  //   modSlot:Part
  // },
  // barrel:{
  //   use:boolean
  //   modSlot:Part
  // },
  // pistolGrip:{
  //   use:boolean
  //   modSlot:Part
  // },
  // magazine:{
  //   use:boolean
  //   modSlot:Part
  // },
  // gasBlock:{
  //   use:boolean
  //   modSlot:Part
  // },
  // launcher:{
  //   use:boolean
  //   modSlot:Part
  // }
// }

//총기 데이터 예제 작성
// let m4a1: Gun= {
//   name:'m4a1',
//   id:'111',
//   chamber:{
//     use:true,
//     modSlot:[
//       {
//         modName:'chamber',
//         itemName:'5.56x45 855a1',
//         itemId:'855',
//         modSlot:[],
//         conflictItemsID:[],
//       }
//     ]
//   },
//   stock:{
//     use:true,
//     modSlot:{
//       modName:
//       itemName:string,
//       itemId:string
//       modSlot:Part[]|null,
//       conflictItemsID:string[],
//     }
//   },
//   receiver:{
//     use:true,
//     modSlot:
//   },
//   barrel:{
//     use:false,
//     modSlot:
//   },
//   pistolGrip:{
//     use:true,
//     modSlot:
//   },
//   magazine:{
//     use:true,
//     modSlot:
//   },
//   gasBlock:{
//     use:false,
//     modSlot:
//   },
//   launcher:{
//     use:false,
//     modSlot:
//   }
// }




// //총기 베이스
// class GunBase{
//   chamber:string;
//   constructor(weapon:string){
//     this.chamber=weapon;
//   }
// }


// //소총
// class Gun extends GunBase{
//   stock:string;
//   constructor(stock:string,weapon:string){
//     super(weapon);
//     this.stock=stock;
//   }
// }


// class AR extends Gun{

// }


// //권총
// class Pistol extends GunBase{
//   magazine:string;
//   pistolGrip:string;
//   constructor(mag:string,Pgrip:string,weapon:string){
//     super(weapon);
//     this.magazine=mag;
//     this.pistolGrip=Pgrip;
//   }
// }






















