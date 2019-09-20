/** IMPORT QUERY **/
const query =require('./queries-table')

const tb = require('./table-class/table')

/** IMPORT CLASS **/
let Account = require('./table-class/account')
let Admin = require('./table-class/admin')
let Applicants = require('./table-class/applicants')
let CvFile = require('./table-class/cv-file')
let Employer = require('./table-class/employer')
let JobInfo = require('./table-class/job-info')
let JobSeeker = require('./table-class/jobseeker')
let ServicePackage = require('./table-class/service-package')

/** USE QUERY TO CREATE TABLE **/
console.log(Account.getParamTable())
/*query.createTable(new tb().tableParams(Admin))
query.createTable(new tb().tableParams(Applicants))
query.createTable(new tb().tableParams(CvFile))
query.createTable(new tb().tableParams(Employer))
query.createTable(new tb().tableParams(JobInfo))
query.createTable(new tb().tableParams(JobSeeker))
query.createTable(new tb().tableParams(ServicePackage))*/
