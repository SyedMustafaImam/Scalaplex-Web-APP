const index_controller= require('../controllers/index.controller')
const validatemovieschema =require('../models/validation/movies.validate')
const validatereservation=require('../models/validation/reservation.validate')
const moviecontroller= require('../controllers/movies.controller')
const reservationcontroller= require('../controllers/reservation.controller')
const showtimevalidation= require('../models/validation/showtime.validate')
const showtimecontroller= require('../controllers/showtime.controller')
const express = require('express');
let router = express.Router();

router.get('/admin', index_controller.admin);
router.post('/admin/courseadmit')
router.post('/admin/sectionadmit')
router.post('/admin/registermovie',validatemovieschema.validating,moviecontroller.movie_create)
router.post('/admin/deletemovie',moviecontroller.movie_delete)
router.post('/admin/setshowtime',showtimevalidation.validating,showtimecontroller.create_showtime)
router.post('/admin/bookseat',validatereservation.validating,reservationcontroller.book_seat)
router.get('/member/:userid', index_controller.member);


module.exports = router;
