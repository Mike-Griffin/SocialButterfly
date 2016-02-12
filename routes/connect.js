var data = require("../connection.json");

exports.view = function(req, res){
  res.render('connect', data);
};
