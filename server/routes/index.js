const index_controller= require('../controllers/index.controller')
const validatemovieschema =require('../models/validation/movies.validate')
const moviecontrolller= require('../controllers/movies.controller')
const express = require('express');
let router = express.Router();

router.get('/admin', index_controller.admin);
router.post('/admin/courseadmit')
router.post('/admin/sectionadmit')
router.post('/admin/registermovie',validatemovieschema.validating,moviecontrolller.movie_create)
router.get('/member/:userid', index_controller.member);


module.exports = router;
