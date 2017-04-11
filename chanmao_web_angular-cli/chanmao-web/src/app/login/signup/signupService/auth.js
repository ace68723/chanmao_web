const succuss = {
    errorcode: 0,
    message: "",
    result: 0,
    token: "token_succuss",
    uid: "123123"
}

const fail = {
    errorcode: 1,
    message: "signup fail",
    result: 1,
    token: "token_fail",
    uid: "123",

}

const AuthModule = {
    appLogin(loginInfo) {
        if (loginInfo.username == '123'){
            return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(succuss);
            }, 1000);
        })
        }
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(fail);
            }, 1000);
        })
    }
}

module.exports = AuthModule;