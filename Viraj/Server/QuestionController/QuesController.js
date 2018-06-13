const mongoose=require('../DBScheme/QuestionDB');
const QuestionSchema=mongoose.model('Question');

var Controller=function () {
    this.addQuestion=function (data) {
        return new Promise(function (resolve,reject) {
            var Question=QuestionSchema({
                name: data.name,
                relateTo: data.relateTo,
                remarks: data.remarks,
                question: data.question,
                answer: data.answer
            });
            Question.save().then(function () {
                resolve({status:200, message: "successfully added"});
            }).catch(function (reason) {
                reject({status:404, message: "Error"});
            })
        });

    };
    this.getQuestion=function () {
        return new Promise(function (resolve,reject) {
            QuestionSchema.find().exec().then(function (value) {
                resolve({status:200, quedata:value});
            }).catch(function (reason) {
                reject({status:404, message: "Can not get"});
            })
        })
    };
    this.getOneQuestion=function (id) {
        return new Promise(function (resolve,reject) {
            QuestionSchema.find({_id:id}).exec().then(function (value) {
                resolve({status:200, question: value});
            }).catch(function (reason) {
                reject({status:404, message:"Id not found"});
            })
        })
    };
    this.updateQuestion=function (id,data) {
        return new Promise(function (resolve,reject) {
            QuestionSchema.update({_id:id},data).then(function (value) {
                resolve({status:200, updateque: value});
            }).catch(function (reason) {
                reject({status:404, message: "Cannot find ID"});
            })
        })
    };
    this.deleteQuestion=function (id) {
        return new Promise(function (resolve,reject) {
            QuestionSchema.remove({_id:id}).then(function () {
                resolve({status:200, message:"Successfully deleted"});
            }).catch(function (reason) {
                reject({status:404, message:"Cannot find the id"});
            })
        })
    }
};

module.exports = new Controller();