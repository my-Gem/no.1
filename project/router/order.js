const router = require('express').Router();
const orderService =require('../service/order');

router.post("/add",async (req,res,next)=>{
    let cc = await orderService.addOrder(req.body);
    res.success(cc);
});

router.get("/",async (req,res,next)=>{
    let content = await orderService.getOrdersByPage(req.query.page);
    res.success(content);
});

module.exports =router;