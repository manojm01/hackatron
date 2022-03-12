const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dash', {
    name: req.user.name
}));
router.get('/admin', ensureAuthenticated, (req, res) => res.render('index', {
    name: req.user.name
}));
router.get('/admin/billing', ensureAuthenticated, (req, res) => res.render('billing', {
    name: req.user.name
}));
router.get('/admin/tables', ensureAuthenticated, (req, res) => res.render('tables', {
    name: req.user.name
}));

module.exports = router;