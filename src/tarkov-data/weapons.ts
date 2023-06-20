import * as fs from 'fs'
const items=fs.readFileSync('./items.json','utf8');
console.log(items);



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

interface Item2{
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
  }[]|null
}





const ak47u:Item={
  category:'mainWeapon',
  id:'58414a16245977599247970a',
  shortName:'AK-74U',
  fullName:'Kalashnikov AKS-74U 5.45x39 assault rifle Default',
  color:'white',
  iconLink:'https://assets.tarkov.dev/584147732459775a2b6d9f12-icon.webp',
  value:{
    price:24605.0,
    currency:'RUB'
  },
  conflictItems:null,
  ability:{
    ammunitionType:'5.45x39',
    rpm:650,
    ergo:44,
    vertical:121,
    horizontal:415,
    accuracy:null,
    magazineCapacity:null,
    reloadSpeed:null,
    checkDuration:null,
    damage:null,
    penetrationPower:null,
    class:null,
    fragmentationChance:null
  },
  modSlot:[{
      slotName:'reciever',
      capatibleItems:[
        "57dc334d245977597164366f",
        "5839a7742459773cf9693481"
      ],
      item:null
    },
    {
      slotName:'gas_block',
      capatibleItems:["59d36a0086f7747e673f3946"],
      item:null
    },
    {
      slotName:'muzzle',
      capatibleItems:[
      "5ac72e945acfc43f3b691116",
      "5ac7655e5acfc40016339a19",
      "5649aa744bdc2ded0b8b457e",
      "5f633f791b231926f2329f13",
      "5943eeeb86f77412d6384f6b",
      "5cc9a96cd7f00c011c04e04a",
      "615d8f5dd92c473c770212ef",
      "5649ab884bdc2ded0b8b457f",
      "57dc324a24597759501edc20",
      "59bffc1f86f77435b128b872",
      "593d493f86f7745e6b2ceb22",
      "564caa3d4bdc2d17108b458e",
      "57ffb0e42459777d047111c5"],
      item:null
    },
    {
      slotName:'stock',
      capatibleItems:[
        "59ecc28286f7746d7a68aa8c",
        "5ab626e4d8ce87272e4c6e43",
        "57dc347d245977596754e7a1"
      ],
      item:null
    },
    {
      slotName:'pistol_grip',
      capatibleItems:[
        "5f6341043ada5942720e2dc5",
        "6087e663132d4d12c81fd96b",
        "5beec8ea0db834001a6f9dbf",
        "5649ad3f4bdc2df8348b4585",
        "5649ade84bdc2d1b2b8b4587",
        "59e62cc886f77440d40b52a1",
        "5a0071d486f77404e23a12b2",
        "57e3dba62459770f0c32322b",
        "5cf54404d7f00c108840b2ef",
        "5e2192a498a36665e8337386",
        "5b30ac585acfc433000eb79c",
        "59e6318286f77444dd62c4cc",
        "5cf50850d7f00c056e24104c",
        "5cf508bfd7f00c056e24104e",
        "5947f92f86f77427344a76b1",
        "5947fa2486f77425b47c1a9b",
        "5c6bf4aa2e2216001219b0ae",
        "5649ae4a4bdc2d1b2b8b4588",
        "5998517986f7746017232f7e",
        "623c3be0484b5003161840dc",
        "628c9ab845c59e5b80768a81",
        "628a664bccaab13006640e47"
      ],
      item:null
    },
    {
      slotName:'charge',
      capatibleItems:[
        "6130ca3fd92c473c77020dbd",
        "5648ac824bdc2ded0b8b457d"
      ],
      item:null
    },
    {
      slotName:'magazine',
      capatibleItems:[
        "564ca9df4bdc2d35148b4569",
        "564ca99c4bdc2d16268b4589",
        "55d480c04bdc2d1d4e8b456a",
        "5cbdaf89ae9215000e5b9c94",
        "55d481904bdc2d8c2f8b456a",
        "55d482194bdc2d1d4e8b456b",
        "55d4837c4bdc2d1d4e8b456c",
        "5aaa4194e5b5b055d06310a5",
        "5bed61680db834001d2c45ab",
        "5bed625c0db834001c062946"
      ],
      item:null
    }
  ]
}


// const ak74u_dustCover:Item2={
//   category:'rangedWeapon',
//   id:'57dc334d245977597164366f',
//   shortName:'6P26 Sb.7',
//   fullName:'AKS-74U dust cover (6P26 Sb.7)',
//   color:'blue',
//   iconLink:'https://assets.tarkov.dev/57dc334d245977597164366f-icon.webp',
//   value:{
//     price:1306,
//     currency:'RUB'
//   },
//   conflictItems:[
//     "57486e672459770abd687134",
//     "5c82342f2e221644f31c060e",
//     "576fd4ec2459777f0b518431",
//     "5c82343a2e221644f31c0611",
//     "5c61a40d2e2216001403158d",
//     "5c90c3622e221601da359851"
//   ],
  
// }


const ak47u_2:Item2={
  category:'mainWeapon',
  id:'58414a16245977599247970a',
  shortName:'AK-74U',
  fullName:'Kalashnikov AKS-74U 5.45x39 assault rifle Default',
  color:'white',
  iconLink:'https://assets.tarkov.dev/584147732459775a2b6d9f12-icon.webp',
  value:{
    price:24605.0,
    currency:'RUB'
  },
  conflictItems:null,
  ability:{
    ammunitionType:'5.45x39',
    rpm:650,
    ergo:44,
    vertical:121,
    horizontal:415,
    accuracy:null,
    magazineCapacity:null,
    reloadSpeed:null,
    checkDuration:null,
    damage:null,
    penetrationPower:null,
    class:null,
    fragmentationChance:null
  },
  modSlot:[{
      slotName:'reciever',
      capatibleItems:[
        "57dc334d245977597164366f",
        "5839a7742459773cf9693481"
      ],
    },
    {
      slotName:'gas_block',
      capatibleItems:["59d36a0086f7747e673f3946"],
    },
    {
      slotName:'muzzle',
      capatibleItems:[
      "5ac72e945acfc43f3b691116",
      "5ac7655e5acfc40016339a19",
      "5649aa744bdc2ded0b8b457e",
      "5f633f791b231926f2329f13",
      "5943eeeb86f77412d6384f6b",
      "5cc9a96cd7f00c011c04e04a",
      "615d8f5dd92c473c770212ef",
      "5649ab884bdc2ded0b8b457f",
      "57dc324a24597759501edc20",
      "59bffc1f86f77435b128b872",
      "593d493f86f7745e6b2ceb22",
      "564caa3d4bdc2d17108b458e",
      "57ffb0e42459777d047111c5"],
    },
    {
      slotName:'stock',
      capatibleItems:[
        "59ecc28286f7746d7a68aa8c",
        "5ab626e4d8ce87272e4c6e43",
        "57dc347d245977596754e7a1"
      ],
    },
    {
      slotName:'pistol_grip',
      capatibleItems:[
        "5f6341043ada5942720e2dc5",
        "6087e663132d4d12c81fd96b",
        "5beec8ea0db834001a6f9dbf",
        "5649ad3f4bdc2df8348b4585",
        "5649ade84bdc2d1b2b8b4587",
        "59e62cc886f77440d40b52a1",
        "5a0071d486f77404e23a12b2",
        "57e3dba62459770f0c32322b",
        "5cf54404d7f00c108840b2ef",
        "5e2192a498a36665e8337386",
        "5b30ac585acfc433000eb79c",
        "59e6318286f77444dd62c4cc",
        "5cf50850d7f00c056e24104c",
        "5cf508bfd7f00c056e24104e",
        "5947f92f86f77427344a76b1",
        "5947fa2486f77425b47c1a9b",
        "5c6bf4aa2e2216001219b0ae",
        "5649ae4a4bdc2d1b2b8b4588",
        "5998517986f7746017232f7e",
        "623c3be0484b5003161840dc",
        "628c9ab845c59e5b80768a81",
        "628a664bccaab13006640e47"
      ],
    },
    {
      slotName:'charge',
      capatibleItems:[
        "6130ca3fd92c473c77020dbd",
        "5648ac824bdc2ded0b8b457d"
      ],
    },
    {
      slotName:'magazine',
      capatibleItems:[
        "564ca9df4bdc2d35148b4569",
        "564ca99c4bdc2d16268b4589",
        "55d480c04bdc2d1d4e8b456a",
        "5cbdaf89ae9215000e5b9c94",
        "55d481904bdc2d8c2f8b456a",
        "55d482194bdc2d1d4e8b456b",
        "55d4837c4bdc2d1d4e8b456c",
        "5aaa4194e5b5b055d06310a5",
        "5bed61680db834001d2c45ab",
        "5bed625c0db834001c062946"
      ],
    }
  ]
}





// const M4A1:Item={
//   category:'mainWeapon',
//   id:'m4a1',
//   value:{
//     price:64000,
//     currency:'RUB'
//   },
//   conflictItems:[],
//   ability:{
//     ammunitionType:'5.56x45',
//     rpm:800,
//     ergo:null,
//     vertical:null,
//     horizontal:null,
//     accuracy:null,
//     magazineCapacity:null,
//     reloadSpeed:null,
//     checkDuration:null,
//     damage:null,
//     penetrationPower:null,
//     class:null,
//     fragmentationChance:null
//   },
//   modSlot:null
// }


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






















