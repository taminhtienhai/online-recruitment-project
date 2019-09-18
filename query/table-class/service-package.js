const Table = require('./table')
class ServicePackage extends Table{
    constructor(name,info,price,date){
        super()
        this._name = name;
        this._info = info;
        this._price = price;
        this._date = date;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get info() {
        return this._info;
    }

    set info(value) {
        this._info = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }
}

module.exports = ServicePackage