const checkIfAuthenticated = function(req,res,next) {
    console.log("middleware")
    console.log(req.session.user)
    if (req.session.user) {
        next();
    } else {
        req.flash("error_messages", "Unable to comply. Please login");
        res.redirect('/auth/login');
    }
}
module.exports = { checkIfAuthenticated };