const jwt = require('jsonwebtoken');


const auth = function(req, res, next) {

    var token = req.cookies.posauth;
    if (token) {
  
      jwt.verify(token, process.env.JWT_KEY, function(err, token_data) {
        if (err) {
           return res.status(403).send('Error');
        } else {
          req.body.id = token_data._id;
          
          next();
        }
      });
  
    } else {
        return res.redirect('/')
    //   return res.status(403).send('No token');
    }
  }

  module.exports = auth;