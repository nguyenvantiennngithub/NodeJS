const foodController = require('../app/controllers/foodController')
const express = require('express')
// const { Router } = require("express")
const router = express.Router()
router.use('/:meat', foodController.meat)
router.use('/:fish', foodController.fish)

router.use('/', foodController.index)

module.exports = router
