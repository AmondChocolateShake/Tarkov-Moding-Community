
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



export const Guns=[{
  name:'AK-47',
  imgLink:'https://assets.tarkov.dev/5c0c1ce886f77401c119d014-image.webp'
},
{
  name:'M4A1',
  imgLink:'https://assets.tarkov.dev/5a8ae36686f774377d6ce226-image.webp'
},
{
  name:'MK47',
  imgLink:'https://assets.tarkov.dev/60b7d76e2a3c79100f1979de-image.webp'
},
{
  name:'SV-98',
  imgLink:"https://assets.tarkov.dev/58414a16245977599247970a-image.webp"
},
{
  name:'Mosin (Sniper)',
  imgLink:"https://assets.tarkov.dev/5b8683a486f77467f2423114-image.webp",
},
{
  name:'MP7A1',
  imgLink:"https://assets.tarkov.dev/5bd056fa86f7743aba7658cd-image.webp",
},
{
  name:'MP5',
  imgLink:"https://assets.tarkov.dev/59411aa786f7747aeb37f9a5-image.webp",
},
{
  name:'MDR 5.56x45',
  imgLink:"https://assets.tarkov.dev/5c98bd7386f7740cfb15654e-image.webp"
},
{
  name:'RPK-16',
  imgLink:"https://assets.tarkov.dev/5c0d1ec986f77439512a1a72-image.webp",
},
{
  name:'M4A1 LVOA',
  imgLink:"https://assets.tarkov.dev/5bbf1c5a88a45017bb03d7aa-image.webp",
},
{
  name:'MP-133 Tactical',
  imgLink:"https://assets.tarkov.dev/5a8ae54786f7743b5e013ba0-image.webp",
},
{
  name:'TOZ-106 Default',
  imgLink:"https://assets.tarkov.dev/5a3a859786f7747e2305e8bf-image.webp",
},
{
  name:'DVL-10 Saboteur',
  imgLink:"https://assets.tarkov.dev/59e8d2b386f77445830dd299-image.webp",
},
{
  name:'PP-91',
  imgLink:"https://assets.tarkov.dev/584149c42459775a77263510-image.webp",
},
{
  name:'CR 200DS',
  imgLink:"https://assets.tarkov.dev/624c2e8614da335f1e034d8c-image.webp",
},

]