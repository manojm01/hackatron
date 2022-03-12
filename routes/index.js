const express = require('express');
const router = express.Router();	const router = express.Router();
const mongoose = require('mongoose')
const { ensureAuthenticated } = require('../config/checkAuth')	const { ensureAuthenticated } = require('../config/checkAuth')


const Admission = require('../models/Admission');
const Complaint = require('../models/Complaint');
// const Complaint = require('../models/User');
//------------ Welcome Route ------------//	//------------ Welcome Route ------------//
router.get('/', (req, res) => {	router.get('/', (req, res) => {
    res.render('welcome');	    res.render('welcome');
});	});


//------------ Dashboard Route ------------//	//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {	router.get('/dashboard', (req, res) => res.render('dash'));
    name: req.user.name	// router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
}));	//     name: req.user.name
// }));
router.get('/admin', ensureAuthenticated, (req, res) => res.render('index', {	router.get('/admin', ensureAuthenticated, (req, res) => res.render('index', {
    name: req.user.name	    name: req.user.name
}));	}));

router.get('/admin/billing', ensureAuthenticated, (req, res) => res.render('billing', {	router.get('/admin/billing', ensureAuthenticated, (req, res) => res.render('billing', {
    name: req.user.name	    name: req.user.name
}));	}));

router.get('/admin/tables', ensureAuthenticated, (req, res) => res.render('tables', {	router.get('/admin/tables', ensureAuthenticated, (req, res) => res.render('tables', {
    name: req.user.name	    name: req.user.name
}));	}));


module.exports = router; 	router.get('/admission', (req, res) => res.render('admission'));
router.get('/complaint', (req, res) => res.render('complaint'));

router.post('/admission', (req, res)=>{
    console.log(req.body)
    const newAdmission = new Admission();
    newAdmission.name = req.body.name;
    newAdmission.email = req.body.email;
    newAdmission.phone = req.body.phone;
    newAdmission.prn = req.body.prn;
    newAdmission.cgpa = req.body.cgpa;
    newAdmission.department = req.body.department;
    newAdmission.address = req.body.address;
    newAdmission.caste = req.body.caste;
    newAdmission.year = req.body.year;
    newAdmission.gender = req.body.gender;
    newAdmission.preference = req.body.preference;
 newAdmission.save()
 .then(user => {
     req.flash(
         'success_msg',
         'Admission form filled successfully.'
     );
     res.redirect('/dashboard');
 })
 .catch(err => console.log(err));
});

router.post('/complaint', (req, res)=>{
    console.log(req.body)
    const newComplaint = new Complaint();
    newComplaint.subject = req.body.subject;
    newComplaint.complaint = req.body.complaint;
    newComplaint.save()
 .then(user => {
     req.flash(
         'success_msg',
         'Complaint filled successfully.'
     );
     res.redirect('/dashboard');
 })
 .catch(err => console.log(err));

 });


module.exports = router;
