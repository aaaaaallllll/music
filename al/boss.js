const express=require('express');
const cors=require('cors');//创建好跨域需要的东西；
const userRouter=require('./routes/router.js');
const bodyParser=require('body-parser');
var server=express();
server.listen(8080);
server.use(cors({//使用中间件来跨域（统一伪装跨域，之后不用再res.writeHead）
	origin:"http://127.0.0.1:5500"
}))
//server.use(express.static('static'));
server.use(bodyParser.urlencoded({extended:false}));
server.use('/router',userRouter);


