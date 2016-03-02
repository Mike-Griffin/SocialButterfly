var data = require("../activity.json");
var curList = 0;
exports.view = function(req, res) {


  var difficulty = req.query['level-difficulty'];
  var desc = req.query.ActivityDescription;
  var idVal = req.query.idVal;

  console.log(difficulty);
  console.log(desc);
  console.log(idVal);

  if(idVal !== undefined && difficulty === undefined && desc === undefined) {
    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < data.status[i].activity[j].descriptions.length; k++) {

          if(data.status[i].activity[j].descriptions[k].id == idVal) {
            data.status[i].activity[j].descriptions.splice(k,1);
          }
        }
      }
    }
  }

  else if(idVal !== undefined && difficulty === undefined && desc !== undefined) {
    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < data.status[i].activity[j].descriptions.length; k++) {

          if(data.status[i].activity[j].descriptions[k].id == idVal) {
            data.status[i].activity[j].descriptions.splice(k,1);
            data.status[1].activity[j].descriptions.push({
              'id': idVal,
              'name': desc
            });
          }
        }
      }
    }
  }

  else if(difficulty !== undefined && desc !== undefined && idVal != undefined) {


    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < data.status[i].activity[j].descriptions.length; k++) {

          if(data.status[i].activity[j].descriptions[k].id == idVal) {
            if(j === Number(difficulty)) {
              data.status[i].activity[j].descriptions[k].name = desc;
            }
            else {
              data.status[i].activity[j].descriptions.splice(k,1);
              data.status[0].activity[Number(difficulty)].descriptions.push({
                'id': idVal,
                'name': desc
              });
              break;
            }
            /*
            data.status[i].activity[j].descriptions[k].name = desc;
            data.status[i].activity[j].descriptions[k].name
            */
          }
        }
      }
    }
  }

  else if (difficulty !== undefined && desc !== undefined) {
    var id =  Math.floor((Math.random() * 10000) + 1);

    data.status[0].activity[Number(difficulty)].descriptions.push({
      'id': id,
      'name': desc
    });
  }

  res.render('meetNewPeople2', data);
};
