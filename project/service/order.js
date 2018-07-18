let Order = require('../model/order');
let productService = require('../service/product');
let Big = require('big.js');
let config = require('../config');

async function addOrder(order){
    //1.判断productId是否存在
   let p =  await productService.getProductById(order.productId);
    //2. p的库存
    if(p.stock < order.count){
        throw Error("商品库存不够");
    }

   //3.给order的字段进行赋值
    order.productName = p.name;
    order.productPrice = p.price;
    order.totalPrice = Big(order.productPrice).times(order.count);
    let o = await Order.create(order);

    //4.减库存
    await productService.updateProduct(p.id,{stock:p.stock-order.count});

    return o;
}


//分页获取订单信息
async function getOrdersByPage(page=1){
 return await Order.find().skip(config.PageCount*(page-1)).limit(config.PageCount).sort("created").select("-__v");
}

module.exports ={
    addOrder,
    getOrdersByPage
}