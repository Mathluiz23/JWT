const { User } = require('../models')

const jwt = require('jsonwebtoken');

const SECRET = require('../config/secret');  

const create = async ({ email, password, username}) => {
  const user = await User.create({ email, password, username })

  const { password: _, ...userCreated } = user.dataValues;

  console.log(userCreated);

  const token = jwt.sign(userCreated, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d'
  })

  return { token, user: userCreated };
};

module.exports = {
  create,
}

