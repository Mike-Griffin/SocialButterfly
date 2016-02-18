var data = require("../activity.json");
var curList = 0;
exports.view = function(req, res) {


  var difficulty = req.query['level-difficulty'];
  var desc = req.query.ActivityDescription;
  var idVal = req.query.idVal;

  if(difficulty !== undefined && desc !== undefined && idVal != undefined) {
    console.log("Id found");
    console.log("Inserted id: " + idVal);

    for(var i = 0; i < 2; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < data.status[i].activity[j].descriptions.length; k++) {
          console.log("Data's id: " + data.status[i].activity[j].descriptions[k].id);

          if(data.status[i].activity[j].descriptions[k].id == idVal) {
            console.log("match found");
            if(j === Number(difficulty)) {
              data.status[i].activity[j].descriptions[k].name = desc;
              console.log("Change name");
            }
            else {
              data.status[i].activity[j].descriptions.splice(k,1);
              console.log("Change difficulty");
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
    console.log("Trying to insert");
    var id =  Math.floor((Math.random() * 10000) + 1);

    data.status[0].activity[Number(difficulty)].descriptions.push({
      'id': id,
      'name': desc
    });
  }
  res.render('meetNewPeople', data);
};
