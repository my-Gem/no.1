'use strict'
require('../db')
let userService = require('../service/user');

async function testRegisterUser() {
    let user = {
        username: "llj",
        password: '123456',
        age: 10,
        role: 10000
    };
    let res = await userService.registerUser(user);
    console.log(res);
}

async function testGetUserinfo() {
    let res = await userService.getUserInfo("llj");
    console.log(res);
}

async function testDeleteUser() {
    await userService.deleteUser("llj");
}

async function testLoginUser() {
    let user = {
        username: 'ldh',
        password: '123456'
    }
    let token = await userService.loginUser(user);
    console.log(token);
}


//testRegisterUser()
testLoginUser()