const orm = require("../config/orm.js");

//used by controllers/burger_controller.js
module.exports = {
    getAllBurgers: function(callback){
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },
    creatNewBurger: function(burgerName, callback){
        orm.insertOne({burger_name: burgerName}, (res) => {
            callback(res);
        });
    },
    devourBurger: function(burgerId, callback){
        orm.updateOne({id: burgerId}, (res) => {
            callback(res);
        });
    }
}