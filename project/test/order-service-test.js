require('../db');
let orderService = require('../service/order');

async function testAddOrder(){
    let o ={
        productId:"5b4e3d45b657b420d0cb0850",
        count:2,
        productPrice: 1
    };
    let res =await orderService.addOrder(o);
    console.log(res);
}

async function testGetOrdersByPage(){

  let res=   await orderService.getOrdersByPage();
    console.log(res);
}


//testAddOrder();
//testGetOrdersByPage()