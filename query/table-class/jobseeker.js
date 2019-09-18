const Table = require('./table')

class JobSeeker extends Table{

    constructor(name, age, phone, address) {
        super()
        this._name = name;
        this._age = age;
        this._phone = phone;
        this._address = address;
    }

    static hashName(){
        return 'name'
    }

    static rangeName(){
        return '_age'
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get item(){
       return  {
           name: this._name,
           age: this._age,
           phone: this._phone,
           address: this._address
       }
    }

}

module.exports = JobSeeker