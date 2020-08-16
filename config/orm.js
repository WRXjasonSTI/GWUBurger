const connection = require('./connection');

//Ormject
const orm = {

    // Query that selects all from database - R
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";",
        function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Query that creates - C
    insertOne: function(table, name, cb) {
        connection.query("INSERT INTO " + table + " (burger_name, devoured) VALUES (?,0);", [name],
            function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

    // Query that updates status - U
    updateOne: function (table, val, id, cb) {
        connection.query("UPDATE " + table + " SET devoured = " + val + " WHERE id = " + id + "", [table, val, id],
            function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    }

};

module.exports = orm;