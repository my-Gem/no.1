require('../db');
const productService = require('../service/product');

async function  testAddProduct(){
    let product =[
        {
            name:"外星人T980",
            price:19998,
            stock:100,
            description:"这是一台和睦牛逼的电脑",
            category:"5b4e3c758981182124224da6",//所属电脑分类
        },
        {
            name:"联想T480",
            price:7999,
            stock:1000,
            description:"这是一台办公用的电脑",
            category:"5b4e3c758981182124224da6",//所属电脑分类
        },
        {
            name:"惠普幻影精灵",
            price:7999,
            stock:1000,
            description:"这是一台游戏笔记本",
            category:"5b4e3c758981182124224da6",//所属电脑分类
        },
        {
            name:"DellU2710D",
            price:3999,
            stock:10000,
            description:"这是一台显示器",
            category:"5b4e3c758981182124224da7",//所属电脑分类
        },
        {
            name:"花王眼罩D",
            price:20,
            stock:10000,
            description:"这是用于缓解眼部疲劳的",
            category:"5b4e3c758981182124224da5",//所属电脑分类
        },
        {
            name:"参天眼药水",
            price:49,
            stock:1400,
            description:"这是用于缓解眼部疲劳的",
            category:"5b4e3c758981182124224da5",//所属电脑分类
        },
    ]
    let res = await productService.addProduct(product);
    console.log(res);
}

async function  testGetProductsByPage(){
    let res = await productService.getProductsByPage(2);
    console.log(res);
}


async function  testUpdateProduct(){
   await productService.updateProduct("5b4e3d45b657b420d0cb0850",{name:"外星人T970"});
}

async function  testdeleteProduct(){
  res = await productService.deleteProduct("5b4e3d45b657b420d0cb0854");
}

//testAddProduct();
//testGetProductsByPage();
//testUpdateProduct();
//testdeleteProduct()