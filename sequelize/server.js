var Sequelize = require('sequelize')
  , sequelize = new Sequelize('sequelizetest', 'root', null, {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
    })
 
var Users = sequelize.define("Users",{
	name: Sequelize.STRING
})

sequelize.sync();