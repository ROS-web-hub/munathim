const express = require('express');
const { check } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const queryString = require("querystring");
const config = require('config');
const connection = require("../../config/db");

const validateSchema = require('../../middleware/validate-schema');

const router = express.Router();

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter password minimum with 6 characters'
        ).isLength({ min: 6 })
    ],
    validateSchema,
    async (req, res) => {
        let { name, email, password } = req.body;

        connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
            if (error) throw error;
            var user = results[0];
            if (user) {
                return res.status(400).json({
                    errors: [{ msg: 'User already exists' }],
                });
            }
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm',
            });

            user = {
                name: name,
                email: email,
                avatar: avatar,
                password: password,
                date: new Date()
            };

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
                if (error) throw error;
                const payload = {
                    user: {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        avatar: user.avatar
                    }
                };

                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) {
                            throw err;
                        }
                        console.log('aa: ', token);
                        res.json({ token });
                    }
                );
            });
        });
    }
);

module.exports = router;
