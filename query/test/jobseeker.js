var Table = require('./table')

class JobSeeker extends Table{

    constructor(name, age) {
        super(null)
        this.name = name
        this.age = age
    }

    static hashName(){
        return 'name'
    }

    static rangeName(){
        return 'age'
    }

    static tableParam(){
        return super.tableInfo(JobSeeker)
    }

    putParam(){
        let item = {
            name: this.name,
            age: this.age
        }
        return super.itemInfo(JobSeeker,item)
    }

}

module.exports = JobSeeker