var data = require("../connection.json");

exports.view = function(req, res) {
  var idVal = req.query.idVal;
  var name = req.query.friend;
  var date = req.query.date;
  var num = req.query.num;
  var period = req.query.time;
  var goal = num + " " + period;


  if (num != 1) {
    goal += "s";
  }

  var id = Math.floor((Math.random() * 10000) + 1);

  if (name === undefined && date === undefined && num === undefined &&
    period === undefined && idVal !== undefined) {

    for (var i = 0; i < data.connection.length; i++) {
      if (data.connection[i].id == idVal) {
        data.connection.splice(i, 1);
      }
    }

  }

  if(name === undefined && date !== undefined && num === undefined &&
  period === undefined && idVal !== undefined) {
    var splitDate = date.split("-");
    var reArrangedDate = ["01", "01", "1980"];
    reArrangedDate[0] = splitDate[1];
    reArrangedDate[1] = splitDate[2];
    reArrangedDate[2] = splitDate[0];
    var date = reArrangedDate.join('/');

    for (var i = 0; i < data.connection.length; i++) {
      if (data.connection[i].id == idVal) {
        data.connection[i].date = date;
      }
    }
  }

  if (name !== undefined && date !== undefined && num !== undefined &&
    period !== undefined && idVal !== undefined) {
    var splitDate = date.split("-");
    var reArrangedDate = ["01", "01", "1980"];
    reArrangedDate[0] = splitDate[1];
    reArrangedDate[1] = splitDate[2];
    reArrangedDate[2] = splitDate[0];
    var date = reArrangedDate.join('/');

    for (var i = 0; i < data.connection.length; i++) {
      if (data.connection[i].id == idVal) {
        data.connection[i].name = name;
        data.connection[i].date = date;
        data.connection[i].goal = goal;

      }
    }
  } else if (name !== undefined && date !== undefined && num !== undefined &&
    period !== undefined) {

    var splitDate = date.split("-");
    var reArrangedDate = ["01", "01", "1980"];
    reArrangedDate[0] = splitDate[1];
    reArrangedDate[1] = splitDate[2];
    reArrangedDate[2] = splitDate[0];
    var date = reArrangedDate.join('/');


    data.connection.push({
      'id': id,
      'name': name,
      'date': date,
      'goal': goal
    });
  }

  res.render('connect', data);
};
