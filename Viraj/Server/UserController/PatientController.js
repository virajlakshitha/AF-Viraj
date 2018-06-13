const mongoose=require('../DBScheme/PatientDB');
const PatientSchema=mongoose.model('Patient');

var Controller=function () {
    this.addPatient=function (data) {
        return new Promise(function (resolve,reject) {
            var Patient=PatientSchema({
                name: data.name,
                age: data.age,
                sex: data.sex,
                status: data.status,
                dob: data.dob
            });
            Patient.save().then(function () {
                resolve({status:200, message: "successfully added"});
            }).catch(function (reason) {
                reject({status:404, message: "Error"});
            })
        });

    };
    this.getPatient=function () {
        return new Promise(function (resolve,reject) {
            PatientSchema.find().exec().then(function (value) {
                resolve({status:200, patdata:value});
            }).catch(function (reason) {
                reject({status:404, message: "Can not get"});
            })
        })
    };
    this.getOnePatient=function (id) {
        return new Promise(function (resolve,reject) {
            PatientSchema.find({_id:id}).exec().then(function (value) {
                resolve({status:200, patient: value});
            }).catch(function (reason) {
                reject({status:404, message:"Id not found"});
            })
        })
    };
    this.updatePatient=function (id,data) {
        return new Promise(function (resolve,reject) {
            PatientSchema.update({_id:id},data).then(function (value) {
                resolve({status:200, updatepat: value});
            }).catch(function (reason) {
                reject({status:404, message: "Cannot find ID"});
            })
        })
    };
    this.deletePatient=function (id) {
        return new Promise(function (resolve,reject) {
            PatientSchema.remove({_id:id}).then(function () {
                resolve({status:200, message:"Successfully deleted"});
            }).catch(function (reason) {
                reject({status:404, message:"Cannot find the id"});
            })
        })
    }
};

module.exports = new Controller();