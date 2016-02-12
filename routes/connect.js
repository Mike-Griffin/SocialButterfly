var data = require("../connection.json");

exports.view = function(req, res){
  var name = req.query.friend;
  var date = req.query.date;
  var num = req.query.num;
  var period = req.query.time;
  var goal = num + " " + period;

  if(num != 1) {
    goal += "s";
  }

  var id =  Math.floor((Math.random() * 10000) + 1);

  console.log(id);

  if (name !== undefined && date !== undefined && num !== undefined &&
        period !== undefined) {
          data.connection.push({
            'id': id,
            'name': name,
            'last-seen': date,
            'goal': goal
          });
  }

  res.render('connect', data);
};
