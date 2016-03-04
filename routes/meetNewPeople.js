var data = require("../activity.json");

var curList = 0;
exports.view = function(req, res) {


  var difficulty = req.query['level-difficulty'];
  var desc = req.query.ActivityDescription;
  var idVal = req.query.idVal;
  var totalPoints= req.query.totalPoints;
  var difficultyPoints = req.query.difficultyPoints;

  console.log(difficulty);
  console.log(desc);
  console.log(idVal);
  console.log(difficultyPoints);
  console.log(totalPoints);

// delete
  if(idVal !== undefined && difficulty === undefined && desc === undefined) {
    console.log("delete");
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
// mark as completed
  else if(idVal !== undefined && difficulty === undefined && desc !== undefined
          && difficultyPoints !== undefined && totalPoints !== undefined) {
    var difficultyInt = parseInt(difficultyPoints);
    var totalInt = parseInt(totalPoints);
    var totalInt = totalInt + difficultyInt;
    totalPoints = totalInt.toString();
    data.status[0].points = totalPoints;
    console.log(data.status[0].points);
    console.log("Mark as completed");
    console.log(difficultyPoints);
    console.log(totalPoints);
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

    console.log("Edit");
    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < data.status[i].activity[j].descriptions.length; k++) {

          if(data.status[i].activity[j].descriptions[k].id == idVal) {
            if(j === Number(difficulty)) {
              console.log("Change name");
              data.status[i].activity[j].descriptions[k].name = desc;
            }
            else {
              console.log("Change difficulty");
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
console.log("insert");
    data.status[0].activity[Number(difficulty)].descriptions.push({
      'id': id,
      'name': desc
    });
  }

  /*
var random_num = Math.random();

  if (random_num > 0.5) {
    res.render('meetNewPeople', data);
  } else {
    res.render('meetNewPeople2', data);
  }
  */

    res.render('meetNewPeople', data);
};
