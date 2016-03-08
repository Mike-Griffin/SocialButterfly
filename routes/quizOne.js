var data = require("../activity.json");


exports.view = function(req, res){
  data.status[0].points = "0";

  res.render('quizOne', {});
};
