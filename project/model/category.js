const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{ //分类名称
        type:String,
        unique:true,
        required:[true,"分类名称不能为空"],
    },
    created:{ //创建商品分类的时间
        type:Date,
        default:Date.now(),
    },
});
module.exports=mongoose.model('category',schema);