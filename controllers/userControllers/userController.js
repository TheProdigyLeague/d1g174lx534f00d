const router = require(`express`).Router();
const User = require('../../models/userModels/User');
const TokenService = require('../../services/TokenService');

router.get('/', (req, res) => {
  res.json({user: 'this is working'})
})

router.post('/', User.createNewUser, (req, res) => {
  res.json({token: res.locals.token, user: res.locals.user})
})

router.post('/login', User.login, (req, res) => {
  // console.log('last step', res.locals)
  if(!res.locals.user) {
    // console.log(res.locals)

    res.status(401).json({error: 'Login Failed'})
  } else {
    const {password, ...user} = res.locals.user;
    res.json({token: res.locals.token, user})
  }
});

module.exports = router;
