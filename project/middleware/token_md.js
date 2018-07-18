let crypto = require('lxj-crypto');
let config = require('../config');
let userService = require('../service/user');


function isExcludeUrl(url){
    let excludeUrls = [
        /.*\/user\/login/,
        /.*\/user\/register/
    ];

    let isExclude = false;
    excludeUrls.forEach(item=>{
        if(item.test(url)){
            isExclude = true;
        }
    });
    return isExclude;
}

module.exports = async (req,res,next)=>{
    //先判断当前的url是否是需要token验证,登陆和注册的接口是不需要token的
    if(!isExcludeUrl(req.url)){
        console.log(req.url);
        //1.从header中取出token
        let token = req.get('token');
        if(!token){
            throw Error('缺少token')
        }

        //2.对token进行解码,看是否是伪造的token
        let tokenData;
        try {
            tokenData = JSON.parse(crypto.aesDecrypt(token, config.TokenKey));
        } catch (e) {
            throw Error('token不合法')
        }
        if(tokenData.expire<Date,now()){
            throw Error("token已过期，请重新登录")
        }

        let userInfo = await userService.getUserInfo(tokenData,username);
        req.user = userInfo;
        }
        next();
};