const mongoose=require('../DBScheme/QuestionDB');
const DoctorSchema=mongoose.model('Onlinedoc');

var Controller=function () {
    this.addDoctor=function (data) {
        return new Promise(function (resolve,reject) {
            var Doctor=DoctorSchema({
                name: data.name
            });
            Doctor.save().then(function () {
                resolve({status:200, message: "successfully added"});
            }).catch(function (reason) {
                reject({status:404, message: "Error"});
            })
        });
    };
    this.getDoctor=function () {
        return new Promise(function (resolve,reject) {
            DoctorSchema.find().exec().then(function (value) {
                resolve({status:200, docdata:value});
            }).catch(function (reason) {
                reject({status:404, message: "Can not get"});
            })
        })
    };
    this.getOneDoctor=function (id) {
        return new Promise(function (resolve,reject) {
            DoctorSchema.find({_id:id}).exec().then(function (value) {
                resolve({status:200, doctor: value});
            }).catch(function (reason) {
                reject({status:404, message:"Id not found"});
            })
        })
    };this.deleteDoctor=function (name) {
        return new Promise(function (resolve,reject) {
            DoctorSchema.remove({name:name}).then(function () {
                resolve({status:200, message: "Deleted"});
            }).catch(function (reason) {
                reject({status:404, message:"Id not found"});
            })
        })
    };
};

module.exports = new Controller();