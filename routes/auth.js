const express = require('express');
const router = express.Router();
const User = require('../models/User');
const security = require('../utils/security');
const validator = require('validator');

// Register
router.post('/register', async (req, res) => {
    try {
        const { sanitized, errors } = security.validateAndSanitizeUserInput(req.body);
        
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }

        const existingUser = await User.findOne({ email: sanitized.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await security.hashPassword(sanitized.password);

        const user = new User({
            email: sanitized.email,
            username: sanitized.username,
            password: hashedPassword
        });

        await user.save();

        const token = security.generateToken(user._id);

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { id: user._id, email: user.email }
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const user = await User.findOne({ email });
        if (!user || !(await security.comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = security.generateToken(user._id);

        res.json({ message: 'Login successful', token, user: { id: user._id, email: user.email } });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;