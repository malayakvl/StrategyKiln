import * as express from 'express';
import authController from '../controllers/AuthController.js';

const authRoute = express.Router();

authRoute.use(express.json({
    inflate: true,
    limit: '512kb',
    strict: true
}));

authRoute.post('/login', authController.authLogin);

export default authRoute;
