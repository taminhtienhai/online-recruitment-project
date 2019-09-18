/** IMPORT QUERY **/
const query =require('./queries-table')

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
query.createTable(Account.tableParams(Account))
query.createTable(Admin.tableParams(Admin))
query.createTable(Applicants.tableParams(Applicants))
query.createTable(CvFile.tableParams(CvFile))
query.createTable(Employer.tableParams(Employer))
query.createTable(JobInfo.tableParams(JobInfo))
query.createTable(JobSeeker.tableParams(JobSeeker))
query.createTable(ServicePackage.tableParams(ServicePackage))
