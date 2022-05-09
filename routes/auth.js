const express = require("express");
const router = express.Router(); // #1 - Create a new express Router

// import in the User model
const { User } = require('../models');
// import in the forms
const { createRegistrationForm, bootstrapField } = require('../forms');



//  #2 Add a new route to the Express router
router.get('/', (req, res) => {
    res.send("Profile")
})
router.get('/login', (req, res) => {
    res.render("auth/login")
})
router.get('/logout', (req, res) => {
    res.send("Logout")
})

// Register Routes
router.get('/register', (req, res) => {
    // display the registration form
    const registerForm = createRegistrationForm();
    res.render('auth/register.hbs', {
        'form': registerForm.toHTML(bootstrapField)
    })
})
router.post('/register', (req, res) => {
    const registerForm = createRegistrationForm();
    registerForm.handle(req, {
        success: async (form) => {
            const user = new User({
                'username': form.data.username,
                'password': form.data.password,
                'email': form.data.email
            });
            await user.save();
            req.flash("success_messages", "User signed up successfully!");
            res.redirect('/auth/login')
        },
        'error': (form) => {
            res.render('users/register', {
                'form': form.toHTML(bootstrapField)
            })
        }
    })
})

module.exports = router; // #3 export out the router