var passport=require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./Schema/Userschema');
module.exports = function(passport) {
passport.use(
new LocalStrategy({ passReqToCallback: true ,usernameField:"email",passwordField:"password" },
(req,email, password, done)=> 
{
    //Finding Match for User
    User.findOne({email:email})
    .then(user=> 
    {
        if (!user) 
        {
            console.log("1");
            return done(null, false, req.flash("error-login","The email is not registered"));
        }
        bcrypt.compare(password, user.password, (err,isMatch)=> 
        {
            if (err) console.log(err);
            if (isMatch) 
            {
                console.log("3");
                return done(null, user);
            } 
            else 
            {
                console.log(password,user.password);
                console.log("2");
                return done(null, false, req.flash("error-login","Incorrect Password"));
            }
        });
    })
    .catch(err=>console.log(err));
})
);

passport.serializeUser(function(user, done) 
{
    done(null, user.id);
});

passport.deserializeUser(function(id, done) 
{
    User.findById(id, function(err, user) 
    {
      done(err, user);
    });
});
};