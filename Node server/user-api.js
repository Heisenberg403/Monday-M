
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express()
const port = 3000

let users = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/user', (req, res) => {
    const user = req.body;

    
    console.log(user);
    users.push(user);

    res.send('User is added to the database');
});

app.get('/api/user', (req, res) => {
    res.json(users);
});

app.get('/api/user/:userid', (req, res) => {
    
    const userid = req.params.userid;

    
    for (let user of users) {
        if (user.userid === userid) {
            res.json(user);
            return;
        }
    }

    
    res.status(404).send('User not found');
});

app.delete('/api/user/:userid', (req, res) => {
    
    const userid = req.params.userid;

    
    users = users.filter(i => {
        if (i.userid !== userid) {
            return true;
        }

        return false;
    });

    
    res.send('User is deleted');
});

app.post('/api/user/:userid', (req, res) => {
    
    const userid = req.params.userid;
    const newUser = req.body;

    
    for (let i = 0; i < users.length; i++) {
        let user = users[i]

        if (user.userid === userid) {
            users[i] = newUser;
        }
    }

    
    res.send('User is edited');
});

app.use(express.static('users'));

app.get('/users/all',function(req,res){
res.redirect('http://localhost:3000/user-list.html');

});





app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
