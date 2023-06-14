const weaponList:string[]=[
'm4a1',
'ak47',
]

let m4a1={
  chamber:'m4a1',
  stock:[],
  pistol_grip:'',
  magazine:'',
  recevier:[],
  chargingHandle:''
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






















