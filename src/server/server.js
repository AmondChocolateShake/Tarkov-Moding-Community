const express=require('express');
const mysql = require('mysql');
const fs=require('fs');
const nocache = require('nocache');


const app=express();
const port=3000;

// JSON 및 URL-encoded 데이터를 파싱하기 위한 미들웨어 등록
app.use(express.json());


//서버 오픈
app.listen(port,()=>{
  
  console.log('server is running now... (port:'+port+')');

});

//정적파일 서빙
app.use(express.static('../dist'));
app.use(nocache());

app.post('/post_data',async (req,res)=>{
  try{
    const postId=req.body.postId
    console.log(postId);
    // console.log("post_data : ",postId);
    const postData=await getPostDetail(postId);
    
    // console.log(postData);
    res.json(postData); // 데이터를 JSON 형식으로 클라이언트에게 응답
  } catch (error) {
    console.error('에러 발생:', error);
    res.status(500).json({ error: '에러 발생' }); // 에러 응답
  }
})

//postId 를 이용해 1개의 게시글을 조회
async function getPostDetail(postId){
  const query='SELECT * FROM posts WHERE postId = ?'

  // 데이터베이스 연결
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });

  try{
    return await new Promise((resolve,reject)=>{
      connection.query(query,postId,(err,results)=>{
        if(err){
          console.error(err);
          reject(err);
        }else{
          resolve(results);
          
        }
      })
    connection.end();

    })
  }catch(err){
    console.error(err);
  }
}

app.post('/default_weapon',async (req,res)=>{
  try{
    const weapons=await getDefaultWeapon()
    // console.log(weapons);
    res.json(weapons);
  }catch{
    connection.end()
  }

})

app.post('/item_element',async (req,res)=>{
  const id=req.body.id
  // console.log(id);
  try{
    const items=await getItemData(id)
    // console.log(items);
    // console.log(items);

    let arr=[];

    for(let item of items){
      let obj={
        imageLink:item['imageLink'],
        name:item['name']
      }
      arr.push(obj);
    }
    res.json(arr);
    // console.log(arr);

  }catch{
    connection.end()
  }

})


app.post('/get_item_data',async (req,res)=>{
  const id=req.body.id
  console.log(id);
  try{
    const items=await getItemData(id)
    // console.log(items);

    let obj={
      imageLink:items[0].imageLink,
      name:items[0].name
    }

    // console.log(obj);
    res.json(obj);
  }catch{
    // connection.end()
  }

})

app.post('/post_submit',async(req,res)=>{
  const data=req.body;
  console.log(data);
  const fs=require('fs');
  
  const file=fs.readFileSync('post_count.json','utf-8');
  const parsedData=JSON.parse(file);
  const count=parsedData['postId']+1
  fs.writeFileSync('post_count.json',JSON.stringify({postId:count}))
  const item=await getItemData(data.mainWeaponId);
  const imageLink=item[0].imageLink;
  console.log(item);
  insertPostDataIntoPost(count,data.mainWeaponId,data.title,data.context,data.ergo,data.price,imageLink)
  for(let mod of data['modIds']){
    insertDataIntoPostSub(count,mod);
  }


})

async function insertPostDataIntoPost(postId,id,title,context,ergo,price,imageLink){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });

    const query='INSERT INTO posts (postId,title,context,ergomics,price,id,imageLink,likes,author) VALUES ( ? , ? , ? , ? , ? , ? , ? , 0 , \'DJ\')'
    connection.query(query,[postId,title,context,ergo,price,id,imageLink],(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
    connection.end();

  })
}



app.post('/weapon_modSlots',async (req,res)=>{
  const id=req.body.id
  try{
    const modSlots=await getWeaponModSlots(id)
    // console.log(modSlots);
    
    // console.log('weapon_modslots : ',objects);

    
    let results=[];
    let obj={
      modName:'',
      compatibleItemIds:[]
    }

    // arr.forEach(element=> name=element.name)
    for(let item of modSlots){
      // console.log(item['modName'])
      try{
      // console.log('item[modname]:',item['modName']+' obj[modName]:',obj.modName);
      if(item['modName']===obj.modName){
        
        obj.compatibleItemIds.push(item['compatibleItemIds']);
      }else{
      
        if(obj.modName===''){
          
          obj.modName=item['modName'];
          obj.compatibleItemIds.push(item['compatibleItemIds']);
          
          // console.log("modName==='' -> obj : ",obj );
        }else{
          results.push(obj);
          // console.log('result : ',results);
          // console.log('obj 초기화 전 : ',obj);
          obj={
            modName:'',
            compatibleItemIds:[]
          }
          // console.log('obj 초기화 후 : ',obj);

          obj.modName=item['modName'];
          obj.compatibleItemIds.push(item['compatibleItemIds']);
          
        }

    

      }
      }catch(err){
        console.log(err);
      }

    }
    if(modSlots.count>0) results.push(obj);
      // if(objects.length===0){
      //   console.log('objects arrary is empty');
      //   objects.push(item);
      // }else
      // {
      //   for(obj of objects){
      //     if(obj['modName']===item['modName']){
      //       console.log('obj[\'modName\']=== item[\'modName\'] ? ' ,obj['modName']===item['modName']);
      //       obj.compatibleItemIds.push(item.compatibleItemIds);
      //       console.log('pushed id into ',obj.modName);
      //     }
          
      //   }
      // }
    

    console.log(results);
    res.json(results);
  }catch{
  }

})




async function getWeaponModSlots(weaponId){
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });

  const query='SELECT modName,compatibleItemIds FROM modSlotList WHERE id = ? ORDER BY modName'

  try{
    return await new Promise((resolve,reject)=>{
      connection.query(query,weaponId,(err,results)=>{
        if(err){
          console.error(err);
          reject(err);
        }else{
          resolve(results);
        }
      })
    connection.end();

    })
  }catch(err){
    console.error(err);
  }
}



async function getDefaultWeapon(){
  const query='SELECT * FROM DefaultWeapon'
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });

  try{
    return await new Promise((resolve,reject)=>{
      connection.query(query,null,(err,results)=>{
        if(err){
          console.error(err);
          reject(err);
        }else{
          resolve(results);
        }
      })
    connection.end();

    })
  }catch(err){
    console.error(err);
  }
}

//게시글 상세 뷰에 사용되는 파츠 리스트를 응답하는 코드
app.post('/get_mod_list',async (req,res)=>{
  const postId=req.body.postId;

  const list=await getItemIdByPostId(postId);
  let objArr=[]
  for(let item of list){
    // console.log(item['id']);
    let itemData=await getItemData(item['id']);
    let price=await getItemPriceByItemId(item['id']);
    let modSlot=await getModSlotDataByItemId(item['id']);
    let recoil=await getRecoilByItemId(item['id']);
    recoil=await JSON.stringify(recoil);
    recoil=await JSON.parse(recoil);
    // console.log(recoil)
    const setData= await setDataIntoModForm(itemData[0],price,modSlot[0],recoil[0]);
    // console.log(setData);
    objArr.push(setData);
  }

  res.json(objArr);
})

async function setDataIntoModForm(itemData,price,modSlot,recoil){
  let modName=modSlot.name.replace('mod_','');
  let recoilPercentageModifier=0;

  if (recoil && recoil['recoilPercentageModifier']) {
    // 중첩된 속성에 안전하게 접근
    recoilPercentageModifier = recoil.recoilPercentageModifier;
  } else {
    console.log('recoilPercentageModifier 속성이 존재하지 않습니다.');
  }

  let resForm={
    slotName: modName,
    iconLink: itemData.iconLink,
    shortName: itemData.shortName,
    name: itemData.name,
    ergo: itemData.ergonomics,
    recoil:recoilPercentageModifier,
    price:[]
  }


  for(let item of price){
    resForm.price.push(
      {
        price:item.price,
        currency:item.currency
      })
  }

  return resForm
}

async function getModSlotDataByItemId(id){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
    const query='SELECT * FROM modSlots WHERE id = ?'
    connection.query(query,id,(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
    connection.end();

  })
}

async function getRecoilByItemId(id){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
    const query='SELECT * FROM recoil WHERE id = ?'
    connection.query(query,id,(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
    connection.end();

  })
}

async function getItemPriceByItemId(id){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
    const query='SELECT * FROM itemPrice WHERE id = ?'
    connection.query(query,id,(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
        // console.log(results);
      }
    })
    connection.end();

  })
}



//postSub테이블로 postId와 아이템id 를 넣는 함수
async function insertDataIntoPostSub(postId,id){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });

    const query='INSERT INTO postSub (postId,id) VALUES ( ? , ? )'
    connection.query(query,[postId,id],(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
    connection.end();

  })
}




//postId에 해당하는 아이템리스트를 반환하는 함수
async function getItemIdByPostId(postId){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
    const query='SELECT id FROM postSub WHERE postId = ?'
    connection.query(query,postId,(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
        // console.log(results);
      }
    })
    connection.end();

  })
}



async function getItemData(id){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
    const query='SELECT * FROM item WHERE id = ?'
    connection.query(query,id,(err,results)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
  })
}

// mods: {
//   slotName: string;
//   iconLink: string;
//   shortName: string;
//   name: string;
//   ergo: number;
//   recoil: number;
//   price: {
//       price: number;
//       currency: string;
//   }[];
// }[]




app.post('/select_post',async (req,res)=>{
  const id = req.body.id;
  try {
    const data = await getPostData(id);
    // console.log('SS) data : ', data);
    res.json(data); // 데이터를 JSON 형식으로 클라이언트에게 응답
  } catch (error) {
    console.error('에러 발생:', error);
    res.status(500).json({ error: '에러 발생' }); // 에러 응답
  }
})



app.post('/all_gun_list',async (req,res)=>{
  const guns=await getGunList();
  // console.log(guns);
  res.json(guns);
})

app.post('/all_gun_short_name',async (req,res)=>{
  const guns=await getGunShortName();
  // console.log(guns);
  res.json(guns);
})

async function getGunShortName(){
  const query='SELECT shortName FROM DefaultWeapon'
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  try {
    return await new Promise((resolve, reject) => {
      connection.query(query, null, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
          // console.log(results);
        }
      });
    connection.end();

    });
    }catch (error) {
      connection.end();
      throw error;
    }
  }


async function getGunList(){
  const query='SELECT id, name, imageLink FROM DefaultWeapon'
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  try {
    return await new Promise((resolve, reject) => {
      connection.query(query, null, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
          // console.log(results);
        }
      });
    connection.end();

    });

    }catch (error) {
      connection.end();
      throw error;
    }
  }

app.post('/get_name_by_id',(req,res)=>{
  const id=req.body.id;
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  connection.query('SELECT shortName FROM item WHERE id = ?',id,(err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.json(result);
    }
  })
  connection.end();


})


//Dev 페이지에서 아이템 객체 데이터 전송시 디비 삽입 처리
app.post('/data', (req, res) => {
  const item=req.body;
  // console.log(item);
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  connection.query('INSERT INTO item SET ?', item, (err, result) => {
    if (err) {
      console.error('Error inserting item into database:', err);
      res.status(500).json({ error: 'Failed to insert item into database' });
    } else {
      console.log('Item inserted into database:', result);
      res.status(200).json({ success: true });
    }
  });
  connection.end();

});



/*데이터 db로 삽입하는 코드
// fs.readFile('../tarkov-data/itemList.json','utf8',
//   (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return;
//     }
//     try {
//       const itemList = JSON.parse(data);
//       for(let i=0;i<itemList.length;i++){
//         const data=itemList[i];
//         console.log(data);
        
          
//           connection.query('INSERT INTO item SET ?', data, (err, result) => {
//             if (err) {
//               console.error('Error inserting item into database:', err);
//             } else {
//               console.log('Item inserted into database:', result);
//             }
//           });
        

//       }

//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//     }
  
// });
*/









  //게시글 데이터 가져오기
async function getPostData(id){
  const mysql=require('mysql');
  const connection2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  // console.log('id: '+id);
  //SELECT * FROM posts WHERE id = '5acf7dd986f774486e1281bf';
  const query = 'SELECT * FROM posts WHERE id = ?';
  const values = id;


  try {
    return await new Promise((resolve, reject) => {
      connection2.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    connection2.end();

    });


  } catch (error) {
    connection2.end();
    throw error;
  }



  // connection.query(query,values,(error, results) => {
  //   if (error) {
  //     throw error;
  //   }else{
  //     data=results;
  //   }
  // });

  // connection.end();
  
  // console.log(data);
  // return data;
  
}


// getPostData('5acf7dd986f774486e1281bf');


