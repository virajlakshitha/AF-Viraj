const express=require('express');
const router=express.Router();
const Controller=require('./QueController');

router.post('/',function (req,res) {
    Controller.addQueue(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/',function (req,res) {
    Controller.getQueue().then(function (data) {
        res.status(data.status).send({data:data.quedata});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/:doctor',function (req,res) {
    Controller.getOneQueue(req.params.doctor).then(function (data) {
        res.status(data.status).send({data:data.queue});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.put('/:doctor',function (req,res) {
    Controller.updateQueue(req.params.doctor,req.body).then(function (data) {
        res.status(data.status).send({message: data.updateque});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.delete('/:doctor',function (req,res) {
    Controller.deleteQueue(req.params.doctor).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});

module.exports = router;