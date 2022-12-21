const User = require("./User");
const Posts = require("./Posts");

User.hasMany(Posts, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Posts.belongsto(User, {
  foreignKey: "user_id",
});

module.exports = { User, Posts };
