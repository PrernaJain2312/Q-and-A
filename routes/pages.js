const route = require('express').Router()
const quesBank = require('../db/models').quesBank
const passport = require('../passport')

route.get('/home', (req, res) => {
    if (req.user) {
        return res.render('home',{ user: req.user})
    }
    res.redirect('/users/signin')
})

route.get('/addQues', (req, res) => {
    if (req.user.username === 'admin') {
        return res.render('addQues')
    }
    res.redirect('/pages/home')
})

route.post('/addQues', (req, res) => {
    quesBank.create({
        grade: req.body.grade,
        subject: req.body.subject,
        topic: req.body.topic,
        question: req.body.question,
        answer: req.body.answer,
    })
    res.redirect('/pages/addQues')
})

exports = module.exports = route