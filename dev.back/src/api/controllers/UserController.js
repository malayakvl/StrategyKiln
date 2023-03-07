import userModel from '../models/User.js';
// import countryModel from '../models/Country.js';
// import paymentPlanModel from '../models/PaymentPlan.js';
import multer from 'multer';
import fs from 'fs';
import { trialSubscriptionEmail, unsubscriberFromEmail } from "../sender/templates.js";
import { sendMail } from "../lib/sendMail.js";

class UserController {
}

export default new UserController();
