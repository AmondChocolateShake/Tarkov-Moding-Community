
// 게시글 상세 뷰 내에 모드 리스트를 위한 아이템 데이터 배열을 반환하는 함수
// 매개변수로 조회하고자 하는 아이디를 담은 배열을 받는다.
// 반환하는 객체의 형식은 아래아 같다.


interface Post{

  img:string,
  info:{
    price:number,
    ergo:number,
    vertical:number,
    horizontal:number
  },
  tags:string[],
  likes:number,
  context:string
}



//postId에 해당하는 게시글 데이터를 가져옴
export function getPostData(postId:number){

  return selectDataByColumn(['*'],'posts','postId',postId);
}



async function getItemData(id:string){
  return new Promise((resolve,reject)=>{
    const mysql=require('mysql');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'Tarkov_Moding',
    });
  
    const query='SELECT * FROM item WHERE id = ?'
    connection.query(query,id,(err:Error,results:any)=>{
      if(err){
        console.error(err);
        reject(err)
      }else{
        resolve(results);
      }
    })
  })
}

/* 함수 호출존 ( 다른데서 호출하면 ㅈ 댐)   */





/*--------------------------------- */



function getItemDataOfMods(modIds:string[]){
  interface Mods{
    slotName:string,
    iconLink:string,
    shortName:string,
    name:string,
    ergo:number,
    recoil:number,
    price:{
      price:number,
      currency:string,
    }[]
  }[]
  let mods:Mods[]=[];



  mods.push({  
    slotName:'scope',
    iconLink:'https://assets.tarkov.dev/58491f3324597764bc48fa02-image.webp',
    shortName:'XPS3-0',
    name:'EOTech XPS3-0 holographic sight',

    ergo:-2,
    recoil:0,
    
    price:[{
      price:210,
      currency:'USD',
    }]
  })

  return mods;
}

// selectDataByColumn(['id','price','currency'],'itemPrice','id','5447a9cd4bdc2dbd208b4567');





//원하는 컬럼의 데이터를 SELECT하고 값을 반환하는 함수
//매개변수로 컬럼 배열과 데이터베이스 이름을 받는다.
function selectDataByColumn(column:string[],table:string,where:string|null,value:any|null){
  let sql='';
  sql=combineStringIntoQuery(column,table,where);
  sendQuery(sql,value).then((data)=>{
    console.log(data);
    return data;
  });
  
}


//컬럼,테이블,웨어 조건을 매개변수로 받아 형식에 맞춘 문자열로 합쳐 반환하는 함수
function combineStringIntoQuery(column:string[],table:string,where:string|null):string{
  //전달 받은 컬럼과 조건을 쿼리 문자열로 이어 붙임
  let sql='SELECT'
  
  for(let i=0;i<column.length;i++){
    if(i===0){
      sql=sql+' '+column[i];
    }
    else{
      sql=sql+','+column[i];
    } 

  }
  if(where===null) sql=sql+' '+ 'FROM' + ' ' + table + ' ';
  else sql=sql+' '+ 'FROM' + ' ' + table + ' ' + 'WHERE' +' ' + where + ' = ?'; 
  return sql;

}

//디비로 쿼리문을 보내는 함수
async function sendQuery(sql:string,value:any|null){
  const mysql=require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });

  try {
    return await new Promise((resolve, reject) => {
      connection.query(sql, value, (error:Error, results:object[]) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });


  } catch (error) {
    connection.end();
    throw error;
  }
}



// 게시글에 저장된 아이템에 대한 id들을 조회하여 반환해주는 함수
// 매개변수로 게시글 아이디를 받는다.
function getIdsFromPostId(postId:number){
  let ids:string[]=[];

  return ids;
}


