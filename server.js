const express = require(`express`);
const logger = require('morgan');
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`);
const path = require(`path`);
const session = require(`express-session`);
// const cors = require('cors');
// const tokenService = require('./services/TokenService');
// const authServices = require('./services/AuthService');


//require the routers
const mainRouter = require('./routers/mainRouter/mainRouter');

const PORT = process.env.PORT || 3001;

const app = express();


// app.use(cors());
app.use(methodOverride(`_method`));
app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api', mainRouter)
app.listen(PORT, (req, res) => {
  console.log(`The server is up and running on port 🍣  ${PORT}`);
})
