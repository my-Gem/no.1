require('../db');
const categoryService = require('../service/category');
async function testAddCategory(){
     let category =
        [
         {name:"家用电器"}, //js对象
         {name:"手机"},
         {name:"服饰"},
         {name:"食品"},
         {name:"美妆"},
         {name:"电脑"},
         {name:"大杂烩"}
         ]
    let content  = await categoryService.addCategory(category);
    console.log(content);
}

async function testGetCategorysByPage(){
    let cate = await categoryService.getCategorysByPage(3);
    console.log(cate);
}

async function testupdateCategory(id,update){
    await categoryService.updateCategory("5b4e0e495992ac1398736d4e",{name:"玩具"});
}

async function testDeleteCategory(){
    await categoryService.deleteCategory("5b4e0e495992ac1398736d4e");
}
//testAddCategory();
//testGetCategorysByPage();
//testupdateCategory();
//testDeleteCategory();