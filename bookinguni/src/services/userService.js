const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'aasoijdasoijdoijasdi'

exports.register = async (email, username, password) => {
    const existing = await User.findOne({ username }).collation({locale: 'en', strength: 2});
    if (existing) {
        throw new Error('Username is taken');
    }

    const existingEmail = await User.findOne({ email }).collation({locale: 'en', strength: 2 });
    password = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        username,
        password
    })

    //Да го променя на изпита
    const token = createSession(user);
    return token;
};


exports.login = async (email, password) => {
    const user = await User.findOne({ email }).collation({
        locale: 'en',
        strength: 2
    });
    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const hasMatch = await bcrypt.compare(password, user.password);

    if (hasMatch == false) {
        throw new Error('Incorrect email or password');
    }
    const token = createSession(user);
    return token;
};


exports.logout = () => {

};

exports.verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

function createSession({ _id,email, username}) {
    const payload = {
        _id,
        email,
        username
    }

    const token = jwt.sign(payload, JWT_SECRET)
    return token;
}