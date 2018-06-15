const express=require('express');
const router=express.Router();
const Controller=require('./DocController');

router.post('/',function (req,res) {
    Controller.addDoctor(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/',function (req,res) {
    Controller.getDoctor().then(function (data) {
        res.status(data.status).send({data:data.docdata});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/:id',function (req,res) {
    Controller.getOneBook(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.doctor});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.delete('/:name',function (req,res) {
    Controller.deleteDoctor(req.params.name).then(function (data) {
        res.status(data.status).send({data:data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});

module.exports = router;