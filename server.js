const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('./passport')
const path = require('path')
const hbs = require("hbs")
// hbs.registerHelper("equal", require("handlebars-helper-equal"))

hbs.registerHelper("ifEquals", function(arg1, arg2, options) {
    return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper("ifNotEqual", function(arg1, arg2, options) {
    return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
});

app.use(session({
    secret: 'secret message',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'hbs')

app.use('/pages', require('./routes/pages'))
app.use('/users', require('./routes/users'))
app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(2626, () =>
    console.log("Server started on http://localhost:2626"))