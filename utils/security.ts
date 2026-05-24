import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserInput {
    email?: string;
    password?: string;
    username?: string;
}

export const validateAndSanitizeUserInput = (userData: UserInput) => {
    const errors: string[] = [];

    if (!userData.email || !validator.isEmail(userData.email)) {
        errors.push('Valid email is required');
    }

    if (!userData.password || !validator.isStrongPassword(userData.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })) {
        errors.push('Password must be at least 8 characters with uppercase, lowercase, number and symbol');
    }

    const sanitized = {
        email: userData.email ? validator.normalizeEmail(userData.email) : '',
        username: userData.username ? validator.escape(validator.trim(userData.username)) : '',
        password: userData.password
    };

    return { sanitized, errors };
};

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string): string => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET || 'your-secret-key-12345',
        { expiresIn: '24h' }
    );
};

export const verifyToken = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'juice-shop-secret-key-2026');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};