var fs = require('fs');
//총 이름을 담는 배열
var GunList = [''];
var GunIds = [0];
var categories = [''];
var itemList = [{}];
function addItemIntoList(item) {
    itemList.push(item);
}
var Guns = [{
        name: '',
        id: '',
        category: ''
    }];
var items = {
    categoryId: '',
    id: '',
    shortName: '',
    name: '',
    color: '',
    iconLink: '',
    imageLink: '',
    value: {
        value: 0,
        currencyName: ''
    },
    conflictingItemIds: [],
    caliber: '',
    fireRate: 0,
    ergonomics: 0,
    verticalRecoil: 0,
    horizontalRecoil: 0,
    accuracyPercentageModifier: 0,
    capacity: 0,
    loadSpeedPercentageModifier: 0,
    checkSpeedPercentageModifier: 0,
    fleshDamage: 0,
    penetrationPower: 0,
    class: [],
    fragmentationChancePercentage: 0,
    modSlots: [{
            name: '',
            compatibleItemIds: []
        }]
};
//3개의 값을 Guns배열에 객체로 삽입하는 함수
function addGunData(name, id, category) {
    Guns.push({ name: name, id: id, category: category });
}
//아이템 객체에 동일한 키가 있는지 비교하는 함수
function checkPropInObj(prop) {
    if (prop in items) {
        return true;
    }
    else
        return false;
}
function pushPropIntoObj(obj, prop) {
}
//총 이름을 배열에 추가하는 함수
function addGun(gunName) {
    GunList.push(gunName);
}
//아이디 값 삽입 함수
function addId(id) {
    GunIds.push(id);
}
// 카테고리 값 삽입 함수
function addCategory(category) {
    categories.push(category);
}
var filePath = './items.json'; //아이템 정보가 들어있는 파일
fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
        console.log('error occured');
        return;
    }
    try {
        var itemData = JSON.parse(data);
        console.log('successed');
        for (var _i = 0, itemData_1 = itemData; _i < itemData_1.length; _i++) {
            var data_1 = itemData_1[_i];
            // console.log(data);
            for (var item in data_1) {
                if (checkPropInObj(item)) {
                    items[item] = data_1[item];
                }
                // console.log(item);
            }
            addItemIntoList(items);
            console.log(items);
        }
    }
    catch (err) {
        console.error('failed to read : ', err);
    }
});
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
