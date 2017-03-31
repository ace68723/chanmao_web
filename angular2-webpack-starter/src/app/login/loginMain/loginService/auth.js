const succuss = {
    errorcode: 0,
    message: "",
    result: 0,
    token: "token_succuss",
    uid: "123123"
}

const fail = {
    errorcode: 1,
    message: "login fail",
    result: 1,
    token: "token_fail",
    uid: "123"
}

const AuthModule = {
    appLogin(loginInfo) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(succuss);
            }, 1000);
        })
    }

}

module.exports = AuthModule;