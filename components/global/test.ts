// let stateArr:(()=>any)[]=[];
// let setStateArr:(()=>void)[]=[];

// //state 반환 변수를 배열로 푸시하는 함수
// export function pushGetStateFunc(func:()=>any){
//   stateArr.push(func);
// }

// //함수 이름으로 state 반환함수를 찾아 반환하는 함수
// export function selectGetStateFunc(funcName:string){
//   return stateArr.find(func=>func.name===funcName);
// }

// let a=1;
// function getA(){
//   return a;
// }

// pushGetStateFunc(getA);
// console.log(selectGetStateFunc('getA'));



function pushStateDataToGlobal(name:string,data:any){
  const fs=require('fs');

  let jsonData=[];

  try{
    const fileData=fs.readFileSync('./temp/data.json','utf-8');
    jsonData=JSON.parse(fileData);
  }catch(error){
    console.error(error);
  }


  const temp={
    name:name,
    data:data
  };
  jsonData.push(temp);
  const update=JSON.stringify(jsonData,null,2);
  fs.writeFileSync('./temp/data.json',update,'utf-8');

}

pushStateDataToGlobal('pageState','main');