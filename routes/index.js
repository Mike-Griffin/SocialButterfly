var data = require("../activity.json");

exports.view = function(req, res){
  res.render('index', data);
};
