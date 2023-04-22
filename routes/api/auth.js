const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check } = require('express-validator');

const auth = require('../../middleware/auth');
const validateShema = require('../../middleware/validate-schema');
const connection = require("../../config/db");

// @route  GET api/auth
// @desc   Test route
// @access Public
console.log("sefsef");
router.get('/', auth, async (req, res) => {
    try {
        console.log('req.user.id: ', req.user.id);
        connection.query('SELECT * FROM users WHERE id = ?', [req.user.id], async function (error, results, fields) {
            console.log('results: ', results[0]);
            const user = results[0];
            if (user) {
                res.json(user);
            } else {
                res.status(400).send('No user');
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/auth
// @desc   Authenticate user and get token
// @access Public
router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists(),
    ],
    validateShema,
    async (req, res) => {
        const { email, password } = req.body;

        try {
            connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results, fields) {
                if (error) throw error;
                let user = results[0];
                if (!user) {
                    return res.status(400).json({
                        errors: [{ msg: 'Invalid credentials' }],
                    });
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return res.status(400).json({
                        errors: [{ msg: 'Invalid credentials' }],
                    });
                }

                const payload = {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        password: user.pasword,
                        avatar: user.avatar
                    }
                };

                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    { expiresIn: 360000 },
                    (err, token) => {
                        console.log('token: ', token);
                        if (err) {
                            throw err;
                        }
                        res.json({ token });
                    }
                );
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
