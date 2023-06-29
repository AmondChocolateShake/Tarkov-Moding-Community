const FS=require('fs');


let modList=[{}];

function addModIntoList(item:object){
  modList.push(item);
}

interface mod{
  id:string
  name:string
  compatibleItemIds:string[]
}


try {
  const data = FS.readFileSync('./items.json', 'utf8');
  const parsedData=JSON.parse(data);


  for(const obj of parsedData){
    // console.log(obj);
    let modTemp={
      compatibleItemIds:[]
    }

    let mod={
      id:'',
      name:'',
      compatibleItemIds:''
    }

    if(obj['modSlots']){
      if(obj['modSlots'].length!==0){
        console.log(obj['modSlots'].length);
        console.log(obj);
        mod['id']=obj['id'];
        
        for(const item of obj['modSlots']){
          mod['name']=item['name'];
          modTemp['compatibleItemIds']=item['compatibleItemIds'];
          if(modTemp['compatibleItemIds'].length>1){
            mod['compatibleItemIds']=modTemp['compatibleItemIds'].join(',');

          }


          console.log(mod);
          
          addModIntoList(mod);
  
        }
      }
      
    }
    

    
    // for(const item in obj){
    //   if(item=='id'){
    //     modTemp[item]=obj[item];
    //   }else if(item=='modSlots'){
    //     const objMod=obj[item]
    //     modTemp['name']=objMod['name'];
    //     modTemp['compatibleItemIds']=objMod['compatibleItemIds'];
    //   }
    // }
  }

} catch (err) {
  console.error('Error reading file:', err);
}


const JsonData = JSON.stringify(modList);

FS.writeFile('modSlotData.json', JsonData, (err:Error | null) => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('JSON file saved successfully.');
  }
});



