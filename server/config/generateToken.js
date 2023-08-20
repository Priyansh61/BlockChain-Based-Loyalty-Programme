// for generating the secret tokens //

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, "rootkart", {
        expiresIn : "30d",
    });
};

module.exports = generateToken;