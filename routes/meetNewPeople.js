var data = require("../activity.json");

exports.view = function(req, res) {


  var difficulty = req.query['level-difficulty'];
  var desc = req.query.ActivityDescription;

  if (difficulty !== undefined && desc !== undefined) {
    console.log(difficulty + ' ' + desc);
    data.activity[Number(difficulty)].descriptions.push({
      'name': desc
    });
    console.log('inserted');
  }
  console.log(JSON.stringify(data));
  res.render('meetNewPeople', data);
};

