const router = require('express').Router();
const productService =require('../service/product');

router.get('/list',async (req,res,next)=>{
    let product = await productService.getProductsByPage(req.query.page);
    res.success(product);
});

 router.post('/add',async (req,res,next)=>{
     let product = await productService.addProduct(req.body);
     res.success(product);
 });

 router.put('/:id',async (req,res,next)=>{
   await productService.updateProduct(req.params.id,req.body);
     res.success();
 });

 router.delete('/:id',async (req,res,next)=>{
     await productService.deleteProduct(req.params.id);
     res.success();
 });

 module.exports = router;


