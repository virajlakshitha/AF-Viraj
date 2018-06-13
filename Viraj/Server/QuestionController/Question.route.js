const express=require('express');
const router=express.Router();
const Controller=require('./QuesController');

router.post('/',function (req,res) {
    Controller.addQuestion(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/',function (req,res) {
    Controller.getQuestion().then(function (data) {
        res.status(data.status).send({data:data.quedata});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/:id',function (req,res) {
    Controller.getOneQuestion(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.question});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.put('/:id',function (req,res) {
    Controller.updateQuestion(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message: data.updateque});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.delete('/:id',function (req,res) {
    Controller.deleteQuestion(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});

module.exports = router;