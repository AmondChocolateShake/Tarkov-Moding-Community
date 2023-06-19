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


//  UML schema
/** 2023.06.16 새로 짠 아이템 구조로 코드 구현 */
interface Item{
  category:string,
  id:string,
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
    item:Item
  }[]|null
}

// const ak47u:Item={
//   category:'mainWeapon',
//   id:'58414a16245977599247970a',
//   value:{
//     price:24605.0,
//     currency:'RUB'
//   },
//   conflictItems:null,
//   ability:{
//     ammunitionType:'5.45x39',
//     rpm:650,
//     ergo:44,
//     vertical:121,
//     horizontal:415,
//     accuracy:,
//     magazineCapacity:,
//     reloadSpeed:,
//     checkDuration:,
//     damage:,
//     penetrationPower:,
//     class:,
//     fragmentationChance:
//   }
// }





const M4A1:Item={
  category:'mainWeapon',
  id:'m4a1',
  value:{
    price:64000,
    currency:'RUB'
  },
  conflictItems:[],
  ability:{
    ammunitionType:'5.56x45',
    rpm:800,
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
    fragmentationChance:null
  },
  modSlot:null
}


/** 2023.06.14 2차시도 */

//파츠 기본 구조
// interface Part{
//   id:string,//아이템 id
//   ability:{
//     ergo:number|null,
//     vertical:number|null,
//     horizontal:number|null
//   }|null
//   conflictItems:string[],//충돌 아이템 id리스트
//   modSlot:{//모드 슬롯
//     slotName:string,//모딩 슬롯 이름
//     capabilityItems:string[],//사용 가능 아이템 id리스트
//     item:Part//파츠 기본 데이터
//   }[]|null
// }





// //총기 프리셋 기본 구성
// interface Gun{
//   id:string,//총기 id
//   ability:{
//     ergo:number|null,
//     vertical:number|null,
//     horizontal:number|null
//   }
//   modSlot:{//모드 슬롯 배열
//     slotName:string,//모드 슬롯 이름
//     capabilityItems:string[]|null,//사용 가능 아이템 id리스트
//     item:Part|null//파츠 기본 데이터
//   }[]|null
// }



//////설계한 인터페이스 기반 코드 구현 시도
// //m4a1
// const m4a1:Gun={
//   id:'m4a1',
//   ability:{
//     ergo:80,
//     vertical:100,
//     horizontal:150
//   },
//   modSlot:[
//     {
//       slotName:'Chamber',
//       capabilityItems:['855a1','856a1','995','FMJ'],
//       item:{
//         id:'855a1',
//         ability:{
//           ergo:null,
//           vertical:null,
//           horizontal:null
//         },
//         conflictItems:[],
//         modSlot:null
//       }
//     },
//     {
//       slotName:'Magazine',
//       capabilityItems:['STANG-30','Gen.2-30'],
//       item:{
//         id:'STANG-30',
//         conflictItems:[],
//         modSlot:[
//           {
//             slotName:'Ammo',
//             capabilityItems:['855a1','856a1','995','FMJ'],
//             item:{
//               id:'855a1',
//               conflictItems:[],
//               modSlot:null
//             }
//           }
//         ]
//       }
//     },
//     {
//       slotName:'Pistol grip',
//       capabilityItems:['AR-15 Colt A2','ECS','DLG-123'],
//       item:{
//         id:'ECS',
//         conflictItems:[],
//         modSlot:null
//       }
//     },
//     {
//       slotName:'Receiver',
//       capabilityItems:['MUS-1S','Noveske','ADAR 2-15'],
//       item:{
//         id:'ADAR 2-5',
//         conflictItems:[],
//         modSlot:[
//           {
//             slotName:'Scope',
//             capabilityItems:['XPS3-0','XPS3-2','HS401G5','UTG'],
//             item:{
//               id:'XPS3-0',
//               conflictItems:[],
//               modSlot:null
//             }
//           },
//           {
//             slotName:'Barrel',
//             capabilityItems:['AR-15 18','AR-15 20','AR-15 260mm'],
//             item:{
//               id:'AR-15 18',
//               conflictItems:[],
//               modSlot:[
//                 {
//                   slotName:'Muzzle',
//                   capabilityItems:['51T','USGI A2','CQB'],
//                   item:{
//                     id:'CQB',
//                     conflictItems:[],
//                     modSlot:null
//                   },
//                 },
//                 {
//                   slotName:'Gas block',
//                   capabilityItems:['MK12','Windham','M4A1'],
//                   item:{
//                     id:'',
//                     conflictItems:[],
//                     modSlot:null
//                   }
//                 }
//               ]
//             }
//           },
//           {
//             slotName:'HandGuard',
//             capabilityItems:['M-LOK','RISII','Carbine'],
//             item:{
//               id:'M-LOK',
//               conflictItems:['MK12'],
//               modSlot:null
//             }
//           }
//         ]
//       }
//     }
//   ]
// }


/**        총기 프리셋 양식        */
// {
//   slotName:'Receiver',
//       capabilityItems:['MUS-1S','Noveske','ADAR 2-15'],
//       item:{
//         id:'ADAR 2-5',
//         conflictItems:[],
//         modSlot:[
//           {
//             slotName:,
//             capabilityItems:,
//             item:{
//               id:,
//               conflictItems:[],
//               modSlot:
//             }
//           }
//         ]
//       }
// }

///////

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






















