const mainDB = require('../../models/mainModels/mainDB');

module.exports = {
  index(req, res, next){
    mainDB.getAllItems()
    .then(results => {
      console.log(`I got the results from the model and am in the controller with -----> `, results);
      res.json({
        message: "got all from inventory",
        data: results
      })
    })
    .catch(error => {
      console.log(`I am the error in the controller for index ----> `, error);
    })
  }
}
