const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize( "QandA", "QandAUser", "QandAPass", {
    dialect: 'mysql'
})

const userBase = db.define('user', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

const quesBank = db.define('question', {
    directory: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ques: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    answer: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    userBase,
    quesBank
}