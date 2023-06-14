const express=require('express');
const fs=require('fs');

const app=express();
const port=3000;


//서버 오픈
app.listen(port,()=>{
  console.log('server is running now... (port:'+port+')');
})

//정적파일 서빙
app.use(express.static('../dist'))

