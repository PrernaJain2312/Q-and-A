const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize( "QandA", "QandAUser", "QandAPass", {
    dialect: 'mysql'
})

const userBase = db.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

const quesBank = db.define('question', {
    grade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    topic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    question: {
        type: DataTypes.STRING,
        allowNull:false
    },
    answer: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

db.sync().then(() => "Database created");

exports = module.exports = {
    db,
    userBase,
    quesBank
}