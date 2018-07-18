require('./db')
//引入异常捕获处理
require('express-async-errors');
const express= require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/index');
const app = express();

//注册日志中间件
app.use(morgan('combined'));

//注册body-parser中间件
app.use(bodyParser.json());

//注册自定义的中间件
app.use(require('./middleware/res_md'));

//注册路由
app.use('/product',require('./router/product'));
app.use('/category',require('./router/category'));
app.use('/order',require('./router/order'));

//异常处理中间件
app.use((err,req,res,next)=>{
    res.fail(err.toString());
});


//启动
app.listen(config.PORT);