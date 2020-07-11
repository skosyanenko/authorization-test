const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');

const app = express();
const saltRounds = 10;
const USERS_PATH = 'users.json';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

const getUsers = () => {
    const rawData = fs.readFileSync(USERS_PATH);
    return JSON.parse(rawData);
}

const isInitialUser = () => {
    const isFileExist = fs.existsSync(USERS_PATH);
    if (isFileExist) {
        const users = getUsers();
        return users.length === 0;
    } else {
        return true;
    }
}

const generateHash = (password) => {
    return bcrypt.hashSync(password, saltRounds, function(err, hash) {
        if (err) {
            throw err;
        } else {
            return hash;
        }
    })
}

const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash, function(err, isMatch) {
        if (err) throw err;
        return isMatch;
    });
}

const isLoginExist = (newUser) => {
    return getUsers().some(user => user.email === newUser.email || user.phone === newUser.phone);
}

const isUserExist = ({login, password}) => {
    return getUsers().some(user => {
        return (user.email === login || user.phone === login) && comparePassword(password, user.password);
    });
}

app.post('/api/register', async (req,res) => {
    let result = '';
    const data = Object.assign(req.body, {
        password: generateHash(req.body.password)
    });

    try {
        if (isInitialUser()) {
            result = JSON.stringify([data]);
        } else if(!isLoginExist(data)){
            result = JSON.stringify([...getUsers(), data]);
        } else {
            return res.status(409).send('Пользователь уже существует');
        }

        fs.writeFileSync(USERS_PATH, result);

        res.status(200).send('Success');
    } catch (e) {
        res.status(500).send('Error');
    }
});

app.post('/api/login', async (req, res) => {
    if (isUserExist(req.body)) {
        res.status(200).send('Success');
    } else {
        res.status(404).send('Пользователь не найден');
    }
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(process.env.PORT || 5000);

console.log('App is working');