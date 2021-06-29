// import dependencies
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
  
  // compares provided password with hashed password
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

// set up fields and rules for User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    }
  },
  {
    //hooks: {
      //beforeCreate: async (newUserData) => {
        //newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //return newUserData;
      //},
      //beforeUpdate: async (updatedUserData) => {
        //updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        //return updatedUserData;
      //},
    //},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;