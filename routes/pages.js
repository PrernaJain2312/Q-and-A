const route = require('express').Router()
const quesBank = require('../db/models').quesBank
const passport = require('../passport')

route.get('/home', (req, res) => {
    if (req.user) {
        // const questions = quesBank.findAll({})
        // console.log(questions.grade)
        return res.render('home',{ user: req.user})
    }
    res.redirect('/users/signin')
})

exports = module.exports = route