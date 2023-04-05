import * as express from 'express';
import TestController from '../controllers/TestController.js';
import DashboardController from '../controllers/DashboardController.js';
import UserController from '../controllers/UserController.js';
import SettingsController from '../controllers/SettingsController.js';
import SlideController from '../controllers/SlideController.js';
import userModel from '../models/User.js';

const apiRoutes = express.Router();

apiRoutes.use(express.json({
    inflate: true,
    limit: '512kb',
    strict: true
}));

// apiRoutes.route('/post-test').get(TestController.testData);
// apiRoutes.route('/post-test').post(TestController.testData);
apiRoutes.route('/upload').post(TestController.uploadFile);
apiRoutes.route('/saveSlideData').post(SlideController.submitSlideData);
apiRoutes.route('/upload-logo').post(SlideController.uploadLogo);


/** ===================================================================== */
/** ================== AUTHENTIFICATED ROUTES =========================== */
/** ===================================================================== */
apiRoutes.use(async (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const decodedJsonObjectString = Buffer.from(bearer[1], 'base64').toString('ascii');
        const decodedJsonObject = decodedJsonObjectString.split(':');
        req.user = await userModel.findUserByEmail(decodedJsonObject[0]);
        next();
    } else {
        res.status(401).json({ code: 401, message: 'Do not have permissions' });
        next();
    }
});
apiRoutes.get('/settings/fetch-item', SettingsController.getSettingsData);
apiRoutes.post('/settings', SettingsController.submitSettingsData);
apiRoutes.get('/user-requests/fetch-items', SlideController.fetchItems);
apiRoutes.route('/user-requests/fetch-item/:id').get(SlideController.fetchItem);
apiRoutes.get('/user-requests/statistic', DashboardController.getStatsData);
apiRoutes.post('/user-requests/bulk-delete', SlideController.bulkDelete);
apiRoutes.route('/user-requests/delete/:id').delete(SlideController.deleteRow);

// apiRoutes.get('/profile', TestController.testData);
apiRoutes.route('/profile')
    .post(UserController.changePassword)
    .get(UserController.getProfile);


apiRoutes.get('/*', defaultHandler);

export default apiRoutes;

// Default handler for unknown routes
function defaultHandler(req, res) {
    res.status(404).send('Unknown API endpoint');
}
