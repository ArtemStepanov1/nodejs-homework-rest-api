const express = require('express');

const ctrl = require('../../controllers/auth');

const { validationBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

router.post('/signup', validationBody(schemas.registerSchema), ctrl.register);

router.post('/login', validationBody(schemas.loginSchema), ctrl.login);

router.get('/current', authenticate, ctrl.getCurrent);

router.get('/logout', authenticate, ctrl.logout);

module.exports = router;