let router = require('express').Router();
let categoryService = require('../service/category');

//接收get请求，请求的参数localhost:端口名/list
router.get("/list",async (req,res, next)=>{
    let categorys = await categoryService.getCategoryList();
    res.success(categorys);
});

//接收get请求，请求的参数localhost:端口名/
router.get('/',async (req,res,next)=>{
    //req.query.page是为了获取请求的url参数
    console.log(req.query.page);
    let content = await  categoryService.getCategorysByPage(req.query.page);
    res.success(content);
});

//接收post请求，请求的参数localhost:端口名/
router.post("/add",async (req,res,next)=>{
   let c=  await categoryService.addCategory(req.body);
   console.log(JSON.stringify(c));
    res.success(c);
});

//delete请求，请求的参数localhost:端口名/id
router.delete("/:id",async (req,res,next)=>{
    await categoryService.deleteCategory(req.params.id);
    res.success();
});

//更新请求，请求的参数localhost:端口名/update
router.put("/:id",async (req,res,next)=>{
    await categoryService. updateCategory(req.params.id,req.body);
    res.success();
});

module.exports = router;
