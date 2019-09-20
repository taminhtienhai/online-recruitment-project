const Table = require('./table')
class CvFile extends Table{
    constructor(primary_info,skill,languages,experience,date){
        super()
        this._primary_info = primary_info;
        this._skill = skill;
        this._languages = languages;
        this._experience = experience;
        this._date = date;
    }

    static hashName(){
        return 'date'
    }


    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get primary_info() {
        return this._primary_info;
    }

    set primary_info(value) {
        this._primary_info = value;
    }

    get skill() {
        return this._skill;
    }

    set skill(value) {
        this._skill = value;
    }

    get languages() {
        return this._languages;
    }

    set languages(value) {
        this._languages = value;
    }

    get experience() {
        return this._experience;
    }

    set experience(value) {
        this._experience = value;
    }

    static getParamTable(){
        return new Table().tableParams(this)
    }
}

module.exports = CvFile