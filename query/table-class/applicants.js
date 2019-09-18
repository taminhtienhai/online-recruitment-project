const Table = require('./table')
class Applicants extends Table{

    constructor(date,rating){
        super()
        this._date = date
        this._rating = rating
    }

    static hashName(){
        return 'date'
    }

    get date() {
        return this._date
    }

    set date(value) {
        this._date = value
    }

    get rating() {
        return this._rating
    }

    set rating(value) {
        this._rating = value
    }

    get item(){
        return {
            date: this._date,
            rating: this._rating
        }
    }

}

module.exports = Applicants