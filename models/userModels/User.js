const bcrypt = require('bcrypt');

const db = require('../../config/connection');
const TokenService = require('../../services/TokenService');

const User = {};

User.createNewUser = function(req, res, next) {
  const user = req.body;
  const password = bcrypt.hashSync(user.password, 10);
  const security = "private"
  db.one('INSERT INTO user_table (username, password, security) VALUES ($1, $2, $3) RETURNING *;', [user.username, password, security, 0]
).then(data => {
  const { password, ...userData } = data;
  res.locals.user = userData;
  const tokenData = {
    username: userData.username,
  };

  TokenService.makeToken(tokenData)
  .then(token => {
    console.log(token);
    res.locals.token = token;
    next()
  }).catch(next)

  }).catch(err => {
    console.log(`user create failed ${err}`)
    next();
  })
}

User.findByUsername = function(username) {
  console.log(username);
  return db.one(`SELECT * FROM user_table WHERE username = $1`, [username])
}

User.login = function(req, res, next) {
  const user = req.body;
  console.log(`In login`, user);
  User.findByUsername(user.username)
  .then(userData => {
    const isAuthed = bcrypt.compareSync(user.password, userData.password);
    console.log('found a user', userData)
    res.locals.user = userData;
    if(!isAuthed) {
      next()
    }


    const data = {
      username: userData.username,
    };

    TokenService.makeToken(data)
      .then(token => {
        res.locals.token = token;
        next();
      }).catch(err => {
        next();
      })
  }).catch(err => {
    console.log('nope, we messed up', err)
    next()
  })
}

module.exports = User;
