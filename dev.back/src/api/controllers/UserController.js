import userModel from '../models/User.js';


class UserController {
    async getProfile(req, res) {
        const user = req.user;

        if (!user) {
            return res.status(401).json({});
        }

        delete user.salt;
        delete user.password;
        delete user.hash;
        delete user.expired_at;

        let response = {
            ...user,
            user: user
        }

        // const address = await userModel.findUserAddress(req.user.id);
        // if (address) {
        //     const country = await countryModel.findById(address.country_id)
        //
        //     response.address = {
        //         ...address,
        //         country
        //     }
        // }

        return res.status(200).json(response);
    }


    async changePassword(req, res) {
        if (req.user) {
            const emailPresent = await userModel.findExistingEmail(req.body.email, req.user.id);
            if (emailPresent > 0) {
                return res.status(402).json({ error: 'Email Present' });
            } else {
                const status = await userModel.changePassword(req.user, req.body);
                if (status) {
                    return res.status(200).json({ status: status });
                }
            }
        }
        return res.status(402).json('Something wend wrong');
    }

}

export default new UserController();
