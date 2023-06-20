const fs=require('fs');


//총 이름을 담는 배열
let GunList=[''];

//총 이름을 배열에 추가하는 함수
function addGun(gunName:string){
  GunList.push(gunName);
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
    
    for(let i=0;i<itemData.length;i++){
      if(itemData[i].categoryId==='mainWeapon'){
        console.log(itemData[i].name);
        addGun(itemData[i].name);
      }
    }

    const gunString=JSON.stringify(GunList);

    fs.writeFile('./GunNames.txt',gunString, (err:NodeJS.ErrnoException) => {
      if (err) {
        console.error('파일 저장 중 오류 발생:', err);
        return;
      }
      console.log('파일이 성공적으로 저장되었습니다.');
    });

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