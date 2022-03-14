const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const { ensureAuthenticated } = require('../config/checkAuth')

const Admission = require('../models/Admission');
const Complaint = require('../models/Complaint');
// const Complaint = require('../models/User');
const complaint = mongoose.model('Complaint');
const admission = mongoose.model('Admission');
//------------ Welcome Route ------------//
router.get('/',ensureAuthenticated, (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
// router.get('/dashboard',ensureAuthenticated, (req, res) => res.render('dash'));
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));
router.get('/adminlogin', (req, res) => res.render('adminlogin'));

router.get('/admin', ensureAuthenticated, async (req, res)=>{
  await complaint.find()
  .then(data=>{
      if(!data)console.log("Failed to retrive complaints");
      else{
          res.render("index",{
              complainData:data
          })
      }
  })
  .catch(err=>{
      res.status(500).send({message: "Erro retrieving user with id " })
  })
});

router.get('/admin/billing', ensureAuthenticated, (req, res) => res.render('billing', {
    name: req.user.name
}));

router.get('/admin/tables', ensureAuthenticated, async (req, res)=>{
    await admission.find()
    .then(data=>{
        if(!data)console.log("Failed to retrive complaints");
        else{
            res.render("tables",{
                admissionData:data
            })
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Erro retrieving user with id " })
    })
  });
  

router.get('/admission',ensureAuthenticated, (req, res) => res.render('admission'));
router.get('/complaint',ensureAuthenticated, (req, res) => res.render('complaint'));

router.post('/admission', (req, res)=>{
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

  
router.post('/adminlogin', (req, res)=>{
    if(req.body.email == "manojmetgud035@gmail.com" && req.body.password == "12345678" ) {
        req.flash(
            'success_msg',
            'Complaint filled successfully.'
        );
        res.redirect('admin');
    }
    else{
        res.redirect('adminlogin');  
    }
    req.flash(
         'success_msg',
         'Login failed'
     );
     
 

 });
 const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_nvhBWn23LWrMPJ",
  key_secret: "jSMCAAUtCl5G6wCZQPcuVWo2",
});
router.get("/pay", (req, res) => {
    res.render("razorpay.ejs");
});

  router.post("/order", (req, res) => {
    // instance.orders.create({
    //   amount: 50000,
    //   currency: "INR",
    //   receipt: "receipt#1",
    //   notes: {
    //     key1: "value3",
    //     key2: "value2",
    //   },
    // });
    let options = {
      amount: 2000000,
      currency: "INR",
    };
  
    razorpay.orders.create(options, function (err, order) {
      res.json(order);
    });
  });
module.exports = router;