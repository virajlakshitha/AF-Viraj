const express=require('express');
const router=express.Router();
const Controller=require('./PatientController');

router.post('/',function (req,res) {
    Controller.addPatient(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.get('/',function (req,res) {
   Controller.getPatient().then(function (data) {
       res.status(data.status).send({data:data.patdata});
   }).catch(function (reason) {
       res.status(reason.status).send({message: reason.message});
   })
});
router.get('/:id',function (req,res) {
   Controller.getOnePatient(req.params.id).then(function (data) {
       res.status(data.status).send({data:data.patient});
   }).catch(function (reason) {
       res.status(reason.status).send({message: reason.message});
   })
});
router.put('/:id',function (req,res) {
    Controller.updatePatient(req.params.id,req.body).then(function (data) {
        res.status(data.status).send({message: data.updatepat});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});
router.delete('/:id',function (req,res) {
    Controller.deletePatient(req.params.id).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (reason) {
        res.status(reason.status).send({message: reason.message});
    })
});

module.exports = router;