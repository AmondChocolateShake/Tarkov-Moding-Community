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

//파츠 데이터 기본 형식
interface part{
  modName:string
  itemName:string,
  itemId:string
  modSlot:part[],
  conflictItemsID:string[],
}

//총 구조도 코드
//확장성 고려할것
interface gun{
  name:string,
  id:string,
  chamber:{
    use:boolean
    modSlot:part
  },
  stock:{
    use:boolean
    modSlot:part
  },
  receiver:{
    use:boolean
    modSlot:part
  },
  barrel:{
    use:boolean
    modSlot:part
  },
  pistolGrip:{
    use:boolean
    modSlot:part
  },
  magazine:{
    use:boolean
    modSlot:part
  },
  gasBlock:{
    use:boolean
    modSlot:part
  },
  launcher:{
    use:boolean
    modSlot:part
  }
}

//총기 데이터 예제 작성
let m4a1:gun={

}




//총기 베이스
class GunBase{
  chamber:string;
  constructor(weapon:string){
    this.chamber=weapon;
  }
}


//소총
class Gun extends GunBase{
  stock:string;
  constructor(stock:string,weapon:string){
    super(weapon);
    this.stock=stock;
  }
}


class AR extends Gun{

}


//권총
class Pistol extends GunBase{
  magazine:string;
  pistolGrip:string;
  constructor(mag:string,Pgrip:string,weapon:string){
    super(weapon);
    this.magazine=mag;
    this.pistolGrip=Pgrip;
  }
}






















