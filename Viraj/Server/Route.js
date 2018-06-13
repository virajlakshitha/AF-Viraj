const express=require('express');
const Router=express.Router();
const PatientRoute=require('./UserController/Patient.Route');
const DoctorRoute=require('./DoctorController/Doctor.Route');
const QuestionRoute=require('./QuestionController/Question.route');
const QueueRoute=require('./QueueController/Queue.Route');

Router.use('/patient/',PatientRoute);
Router.use('/doctor/',DoctorRoute);
Router.use('/question/',QuestionRoute);
Router.use('/queue/',QueueRoute);

module.exports = Router;