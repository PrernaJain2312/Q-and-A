const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('./passport')

app.use(session({
    secret: 'secret message',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.listen(2626, () =>
    console.log("Server started on http://localhost:2626"))