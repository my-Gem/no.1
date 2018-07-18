const config = require('../config');
const Category = require('../model/category');


//查询商品分类
async function getCategoryList(){
   return await Category.find();
}

async  function isIdExist(id){
    let c = await Category.find({_id:id});
    if(!c){
        throw Error('id为${id}的分类不存在');
    }
}
//分页查询分类的数据
async function  getCategorysByPage(page=1){
    return await Category.find().skip(config.PageCount * (page - 1)).limit(config.PageCount).sort("created").select("-__v");
}

//添加商品分类
async function addCategory(category){
  return await Category.create(category);
}

//删除分类
async function deleteCategory(id){
    //判断id是否存在
    await isIdExist(id);
   let res = await Category.deleteOne({_id:id});
    if(res.n<1){
        throw Error("删除分类失败");
    }
}

//更新分类
async function updateCategory(id,update){
    //判断id是否存在
    await isIdExist(id);
    let res = await Category.updateOne({_id:id},update);
    if(res.n<1){
        throw Error("更新分类失败");
    }
}

module.exports = {
    getCategoryList,
    getCategorysByPage,
    addCategory,
    deleteCategory,
    updateCategory
}
