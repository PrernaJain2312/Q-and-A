const route = require('express').Router()
const quesBank = require('../db/models').quesBank
const passport = require('../passport')

route.get('/quesForm', (req, res) => {
    if (req.user) {
        // const questions = quesBank.findAll({})
        // console.log(questions.grade)
        return res.render('quesForm',{ user: req.user})
    }
    res.redirect('/users/signin')
})

route.post('/quesForm', (req, res) => {
    //console.log(req.body);
    quesBank.create({
        directory: req.body.directory,
        question: req.body.question,
        answer: req.body.answer
    }).then((data) => {
        // console.log(data)
        res.redirect('/pages/quesForm')
    })
})

exports = module.exports = route