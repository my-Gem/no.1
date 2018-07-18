const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1/${config.DB}`);

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
});

db.on('open',(err)=>{
    console.log("数据库连接成功");
});