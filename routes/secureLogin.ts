import { Request, Response } from 'express';
import { comparePassword, generateToken, validateAndSanitizeUserInput } from '../utils/security';
import { UserModel } from '../models/user';

export const secureLogin = () => {
    return async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;

            // ✅ Fixed validation check
            const validation = validateAndSanitizeUserInput({ email, password });
            if (validation.errors.length > 0) {
                return res.status(400).json({ 
                    message: 'Invalid input',
                    errors: validation.errors 
                });
            }

            const user = await UserModel.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const isValid = await comparePassword(password, user.password);
            if (!isValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const token = generateToken(user.id);

            // Return in Juice Shop expected format
            res.json({
                authentication: {
                    token,
                    uid: user.id,
                    bid: null
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Login failed' });
        }
    };
};