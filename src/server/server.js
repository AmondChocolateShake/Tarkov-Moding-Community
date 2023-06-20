const express=require('express');
const mysql = require('mysql');

// 데이터베이스 연결
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Tarkov_Moding',
});



const app=express();
const port=3000;

// JSON 및 URL-encoded 데이터를 파싱하기 위한 미들웨어 등록
app.use(express.json());


//서버 오픈
app.listen(port,()=>{
  
  console.log('server is running now... (port:'+port+')');
})

//정적파일 서빙
app.use(express.static('../dist'))

app.post('/data', (req, res) => {
  const item=req.body;
  console.log(item);

  connection.query('INSERT INTO item SET ?', item, (err, result) => {
    if (err) {
      console.error('Error inserting item into database:', err);
      res.status(500).json({ error: 'Failed to insert item into database' });
    } else {
      console.log('Item inserted into database:', result);
      res.status(200).json({ success: true });
    }
  });
  // 데이터 처리 로직
  // ...

});

