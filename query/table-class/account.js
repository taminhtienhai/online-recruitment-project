const Table = require('./table')
class Account extends Table{
    constructor(user,password){
        super()
        this._user = user;
        this._password = password;
    }

    static hashName(){
        return 'user'
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get item(){
        return {
            user: this._user,
            password: this._password
        }
    }
}

module.exports = Account