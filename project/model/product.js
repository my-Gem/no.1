const mongoose =require('mongoose');
const schema = new mongoose.Schema({
   name:{
       type:String,
       required:[true,"商品名称不能为空"],
       unique:true
   },
   price:{
       type:String,
       required:[true,"商品价格不能为空"],
   },
    stock:{  //库存
        type:Number,
        default:0,
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      required:[true,"分类id不能为空"],
    },
    description:{
        type:String,
        required:[true,"商品描述不能为空"],
    },
    isOnSale:{
        type:Boolean,
        default:true  ///默认是上架的
    },
    created:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('product',schema);