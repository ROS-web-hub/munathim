const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    console.log('req: ', req.body);
    const errors = validationResult(req.body);
    console.log('errors: ', errors);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};
