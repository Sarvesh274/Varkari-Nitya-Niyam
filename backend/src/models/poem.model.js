const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Poem = sequelize.define("Poem", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  chapter: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Poem;
