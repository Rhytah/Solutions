const express = require('express');
const mogooose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const todoRoutes = require('./routes/todoRoutes')
const authRoutes = require('./routes/authRoutes')


const { DATABASE_URL } = process.env
const { PORT } = process.env || 4000
const app = express()

// add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.use('/todos', todoRoutes, (next) => {
    next()
});
app.use('/auth', authRoutes);

 
// verify the token and return it if it's valid
app.get('/verifyToken', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Token is required."
      });
    }
    // check token that was passed by decoding token using secret
    jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
   
      // return 401 status if the userId does not match.
      if (user.userId !== userData.userId) {
        return res.status(401).json({
          error: true,
          message: "Invalid user."
        });
      }
      // get basic user details
      var userObj = utils.getCleanUser(userData);
      return res.json({ user: userObj, token });
    });
  });
   
  
// connect db
mogooose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
    .then(() => {
        app.listen(PORT, () => console.log('Server running on port: ', PORT))
    })
    .catch(error => console.error(error))