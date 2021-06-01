const express = require('express');
let router = express.Router();
const reservationcontroller= require('../controllers/reservation.controller')
const validatereservation=require('../models/validation/reservation.validate')
//======================
router.get('/bookseat',validatereservation.validating,reservationcontroller.book_seat)

module.exports=router;

