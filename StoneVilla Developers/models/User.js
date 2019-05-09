const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone_no: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        password: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)