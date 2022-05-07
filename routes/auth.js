const express = require("express");
const router = express.Router(); // #1 - Create a new express Router


//  #2 Add a new route to the Express router
router.get('/', (req,res)=>{
    res.send("Profile")
})
router.get('/login', (req,res)=>{
    res.send("Login")
})
router.get('/logout', (req,res)=>{
    res.send("Logout")
})
router.get('/register', (req,res)=>{
    res.send("Register")
})

module.exports = router; // #3 export out the router