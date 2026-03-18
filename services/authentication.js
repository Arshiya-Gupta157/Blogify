const jwt = require('jsonwebtoken');
const secret = "ThisIsMySecretKey"

function createToken(user) {
    const {_id, fullName, email, profileImageUrl, role} = user
    const payload = {
        _id,
        fullName,
        email,
        profileImageUrl,
        role
    }

    const token = jwt.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = jwt.verify(token, secret);
    return payload;
}

module.exports = {
    createToken,
    validateToken
}