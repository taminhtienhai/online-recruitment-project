const Table = require('./table')
class JobInfo extends Table{
    constructor(position,edu_level,job_profess,workplace
                ,salary,description,requirement,tag,date){
        super()
        this._position = position;
        this._edu_level = edu_level;
        this._job_profess = job_profess;
        this._workplace = workplace;
        this._salary = salary;
        this._description = description;
        this._requirement = requirement;
        this._tag = tag;
    }

    static hashName(){
        return 'name'
    }

    get position() {
        return this._position;
    }

    set position(value) {
        this._position = value;
    }

    get edu_level() {
        return this._edu_level;
    }

    set edu_level(value) {
        this._edu_level = value;
    }

    get job_profess() {
        return this._job_profess;
    }

    set job_profess(value) {
        this._job_profess = value;
    }

    get workplace() {
        return this._workplace;
    }

    set workplace(value) {
        this._workplace = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get requirement() {
        return this._requirement;
    }

    set requirement(value) {
        this._requirement = value;
    }

    get tag() {
        return this._tag;
    }

    set tag(value) {
        this._tag = value;
    }

    static getParamTable(){
        return new Table().tableParams(this)
    }
}

module.exports = JobInfo