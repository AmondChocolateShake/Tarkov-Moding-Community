
export function pushStateDataToGlobal(name:string,data:any){
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

export function getStateFromGlobal(key:string){
  const fs = require('fs');
  
  try {
    const fileData = fs.readFileSync('./temp/data.json', 'utf-8');
    const jsonData = JSON.parse(fileData);
    
    if (jsonData.hasOwnProperty(key)) {
      return jsonData[key];
    } else {
      return null; // 키에 해당하는 값이 없을 경우 null 반환
    }
  } catch (error) {
    console.error(error);
    return null; // 파일 읽기 오류나 JSON 파싱 오류 등이 발생한 경우 null 반환
  }

}

function removeAllData() {
  const fs = require('fs');
  const path = './temp/data.json';
  
  try {
    fs.writeFileSync(path, '{}', 'utf-8');
    console.log('All data removed.');
  } catch (error) {
    console.error(error);
  }
}


// //state 반환 변수를 배열로 푸시하는 함수
// export function pushGetStateFunc(func:()=>any){
//   stateArr.push(func);
// }

// //함수 이름으로 state 반환함수를 찾아 반환하는 함수
// export function selectGetStateFunc(funcName:string){
//   return stateArr.find(func=>func.name===funcName);
// }

// //setState 함수를 배열에 푸시하는 함수
// export function pushSetStateFunc(func:()=>any){
//   setStateArr.push(func);
// }

// //함수 이름으로 setState 함수를 찾아 반환하는 함수
// export function selectSetStateFunc(funcName:string){
//   return setStateArr.find(func=>func.name===funcName);
// }

// export function pushBothState(stateFunc:()=>any,setFunc:()=>any){
//   pushGetStateFunc(stateFunc);
//   pushSetStateFunc(setFunc);
// }



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








