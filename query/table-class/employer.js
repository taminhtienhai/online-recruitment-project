const Table = require('./table')
class Employer extends Table{
    constructor(company_name,job_profess,address
                ,phone,contact_name,contact_email
                ,benefits,logo){
        super()
        this._company_name = company_name;
        this._job_profess = job_profess;
        this._address = address;
        this._phone = phone;
        this._contact_name = contact_name;
        this._contact_email = contact_email;
        this._benefits = benefits;
        this._logo = logo;
    }

    static hashName(){
        return 'company_name'
    }

    get company_name() {
        return this._company_name;
    }

    set company_name(value) {
        this._company_name = value;
    }

    get job_profess() {
        return this._job_profess;
    }

    set job_profess(value) {
        this._job_profess = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }

    get contact_name() {
        return this._contact_name;
    }

    set contact_name(value) {
        this._contact_name = value;
    }

    get contact_email() {
        return this._contact_email;
    }

    set contact_email(value) {
        this._contact_email = value;
    }

    get benefits() {
        return this._benefits;
    }

    set benefits(value) {
        this._benefits = value;
    }

    get logo() {
        return this._logo;
    }

    set logo(value) {
        this._logo = value;
    }

    static getParamTable(){
        return new Table().tableParams(this)
    }
}

module.exports = Employer