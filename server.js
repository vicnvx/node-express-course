// search node_modules for 'express'
const express = require('express');
const app = express();


const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]

// respond to a GET request at localhost:8000/users with res.json()
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.listen(8000, function(){
    console.log("server is running")
})