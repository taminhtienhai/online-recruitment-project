const Table = require('./table')
class Admin extends Table{
    constructor(name){
        super()
        this._name = name;
    }

    static hashName(){
        return 'name'
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get item(){
        return {
            name: this._name
        }
    }
}


module.exports = Admin