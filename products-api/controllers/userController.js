const router = require('express').Router();
const rescue = require('express-rescue');
const Joi = require('joi');

const userService = require('../services/userService');

const { validateWithJoi } = require('./utils/joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

router.post('/', rescue(async (req, res) => {
  validateWithJoi(userSchema, req.body);

  const { email, password, username } = req.body;

  const { token, user } = await userService.create({ email, password, username });

  res.status(201).json({ token, user });
}));


module.exports = router;