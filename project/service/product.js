require('../db');
let config = require('../config');
const Product = require('../model/product');

async function addProduct(product){
  return  await Product.create(product);
}

async function getProductsByPage(page=1){
   return  await Product.find().skip(config.PageCount*(page-1)).limit(config.PageCount).sort("created").select("-__v");
}

async function isIdExist(id){
    let p =  await Product.findOne({_id:id});
    if(!p){
        throw Error("id为${id}的商品不存在");
    }
}

async function updateProduct(id,update){
    await isIdExist(id);
    let res = await Product.updateOne({_id:id},update);
   if(res.n<1){
       throw Error("更新失败");
   }
}

async function deleteProduct(id){
    await isIdExist(id);
   let res = await Product.deleteOne({_id:id});
    if(res.n<1){
        throw Error("删除失败");
    }
}

async function  getProductById(id){
    await isIdExist(id);
    return await Product.findOne({_id: id});
}
module.exports={
    addProduct,
    getProductsByPage,
    updateProduct,
    deleteProduct,
    getProductById
}
