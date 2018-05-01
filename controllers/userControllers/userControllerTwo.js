const userDB = require('../../models/userModels/userDB');

module.exports = {
  index(req, res, next){
    // console.log("I made to the user controller!!!!", req.params);
    // console.log('in user controller getOne()', req.params.username);
    userDB.getSingle(req.params.username)
    .then(result => {
      // console.log('In getting the user! ---> ', result);
      res.json({
        message: "ok",
        data: result
      });
    })
    .catch(error => {
      next(error)
    })
  },

}
