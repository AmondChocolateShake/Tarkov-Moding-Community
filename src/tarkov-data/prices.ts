
async function putPriceIntoDB(){
  const mysql=require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'Tarkov_Moding',
  });
  const fs=require('fs')


  const price=fs.readFileSync('../tarkov-data/prices.json','utf-8')
  console.log(JSON.parse(price));
  const parsedData=JSON.parse(price);

  for(let item of parsedData){
    if(item.merchant==="flea-market") console.log('플리제외');
    else{
      let values=[item.itemId,item.value,item.currencyName];
      const query='INSERT INTO itemPrice (id,price,currency) VALUES (?,?,?)'
      await connection.query(query,values);
    }

  }
}

putPriceIntoDB();