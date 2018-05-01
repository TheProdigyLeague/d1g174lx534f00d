const express = require(`express`);
const logger = require('morgan');
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const session = require(`express-session`);
// const cors = require('cors');
const tokenService = require('./services/TokenService');
const authServices = require('./services/AuthService');


//require the routers
const mainRouter = require('./routers/mainRouter/mainRouter');
const userRouter = require('./controllers/userControllers/userController');
const userRouterTwo = require('./routers/userRouters/userRouter');

const PORT = process.env.PORT || 3001;

const app = express();


// app.use(cors());
app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`public`));
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);
app.use(tokenService.receiveToken);

app.get('/restricted', authServices.restrict(), (req, res) => {
  res.json({message: 'nailed it!'})
})
app.get('/isLoggedIn', authServices.isLoggedIn, (req, res) => {
  res.json({isLoggedIn: res.locals.isLoggedIn})
})

app.use('/authtwo', userRouterTwo)
app.use('/auth', userRouter)
app.use('/api', mainRouter)
app.listen(PORT, (req, res) => {
  console.log(`The server is up and running on port 🍣  ${PORT}`);
})
