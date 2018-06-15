const mongoose=require('../DBScheme/QueueDB');
const QueueSchema=mongoose.model('Queue');

var Controller=function () {
    this.addQueue=function (data) {
        return new Promise(function (resolve,reject) {
            var Queue=QueueSchema({
                doctor:data.doctor,
                patient: data.patient,
                time: data.time,
                type: data.type,
                assignedBy: data.assignedBy,
                remarks: data.remarks
            });
            Queue.save().then(function () {
                resolve({status:200, message: "successfully added"});
            }).catch(function (reason) {
                reject({status:404, message: "Error"});
            })
        });
    };
    this.getQueue=function () {
        return new Promise(function (resolve,reject) {
            QueueSchema.find().exec().then(function (value) {
                resolve({status:200, quedata:value});
            }).catch(function (reason) {
                reject({status:404, message: "Can not get"});
            })
        })
    };
    this.getOneQueue=function (doctor) {
        return new Promise(function (resolve,reject) {
            QueueSchema.find({doctor:doctor}).exec().then(function (value) {
                resolve({status:200, queue: value});
            }).catch(function (reason) {
                reject({status:404, message:"Id not found"});
            })
        })
    };
    this.updateQueue=function (doctor,data) {
        return new Promise(function (resolve,reject) {
            QueueSchema.update({doctor:doctor},data).then(function (value) {
                resolve({status:200, updateque: value});
            }).catch(function (reason) {
                reject({status:404, message: "Cannot find ID"});
            })
        })
    };
    this.deleteQueue=function (patient) {
        return new Promise(function (resolve,reject) {
            QueueSchema.remove({patient:patient}).then(function () {
                resolve({status:200, message:"Successfully deleted"});
            }).catch(function (reason) {
                reject({status:404, message:"Cannot find the id"});
            })
        })
    }
};

module.exports = new Controller();