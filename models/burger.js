const orm = require('../config/orm.js');

const burger = {

  select: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  update: function (devoured, status, cb) {
    orm.updateOne("burgers", devoured, status, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;

