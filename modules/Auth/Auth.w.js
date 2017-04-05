'use strict';


const  AuthApi        = require( './AuthApi');
const  ModuleConstants  = require( '../ModuleConstants');

// version
const VERSION         = ModuleConstants.CMVERSION;
//constants
const ERROR_STORE     = ModuleConstants.ERROR_STORE;
const ERROR_NETWORK   = ModuleConstants.ERROR_NETWORK;
const ERROR_PASSWORD  = ModuleConstants.ERROR_PASSWORD;
const ERROR_AUTH      = ModuleConstants.ERROR_AUTH;
const SUCCESS         = ModuleConstants.SUCCESS;
const FAIL            = ModuleConstants.FAIL;
const SUCCESS_LOGIN   = ModuleConstants.SUCCESS_LOGIN;
const TOKEN           = ModuleConstants.TOKEN;
const UID             = ModuleConstants.UID;
const STARTED         = ModuleConstants.STARTED;
// message
const ERROR_NETWORK_MESSAGE   = ModuleConstants.ERROR_NETWORK_MESSAGE;
const ERROR_PASSWORD_MESSAGE  = ModuleConstants.ERROR_PASSWORD_MESSAGE;
const ERROR_AUTH_MESSAGE      = ModuleConstants.ERROR_AUTH_MESSAGE;
const ERROR_STORE_MESSAGE     = ModuleConstants.ERROR_STORE_MESSAGE;

let _token = "";

const AuthModule = {
   async AppLogin(io_data){
     try{
       const username = io_data.username;
       const password = io_data.password;
       const deviceToken = io_data.deviceToken;
       const data = {username,password,deviceToken};
       const userInfo = formatLogin(data);
       const loginResult = await AuthApi.AppLogin(userInfo);
       const eo_result = {
         result: loginResult.result,
         message: loginResult.message
       }
       return eo_result
     }catch(e){

     }
    }
}

module.exports = AuthModule;

const formatLogin = (io_data) => {
  const userInfo = Object.assign({},{
    // os:    navigator.appCodeName +" | " +
    //        navigator.appVersion +" | " +
    //        navigator.language +" | " +
    //        navigator.userAgent,
    deviceToken:'',
    username:io_data.username,
    password:io_data.password,
    uuid: '',
    version : VERSION
  });

  return userInfo
}
