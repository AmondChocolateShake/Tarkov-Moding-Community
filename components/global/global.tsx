
const mainData={
  weaponList:['m4a1','ak-47','HK416']
}


export function getWeaponList(){
  return mainData.weaponList
  
}

let gunName='';

export function getSelectedGunName(){
  return gunName;
}

//사용자가 선택한 총기의 이름을 담아주는 함수
export function select(name:string){
  gunName=name;
}

export let pageState='main';

export const pageChangedto=(page:string)=>{
  if(page==='post'){
    pageState='post'
  }else if(page==='main'){
    pageState='main'
  }else if(page==='board'){
    pageState='board'
  }else{
    console.log("꺼져");
  }
}




export const Guns=[{}];


