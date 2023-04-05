import passport from '../middleware/passport.js';
import { getTokensAndSetCookies } from '../lib/token.js';


class AuthController {
    /**
     * Login user via email and password
     * @param req
     * @param res
     * @param next
     */
    authLogin(req, res, next) {
        passport.authenticate('local', { session: false },
            (err, authUser, info) => {
                if (err) {
                    return res.status(500).json({ code: 500, message: 'Authentification failed', error: {message: "dsadasd"} });
                }
                if (!authUser) {
                    return res.status(400).json({ code: 400, message: info.message });
                }
                req.login(authUser, { session: false }, (err) => {
                    if (err) {
                        res.send(err);
                    }
                    getTokensAndSetCookies(req, res, authUser.id, authUser.email);

                    res.status(200).json({ user: authUser });
                });
            }
        )(req, res, next);
    }
}

export default new AuthController();
