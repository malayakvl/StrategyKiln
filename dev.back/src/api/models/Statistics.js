import pool from './connect.js';
import { logger } from '../../common/logger.js';

class StatisticsController {
    async addStatisticsData(type) {
        const client = await pool.connect();
        try {
            const query = `INSERT INTO data.statistics (file_type) VALUES ('${type}')`;
            await client.query(query);

            return { success: true };
        } catch (e) {
            console.log('error message', e.message);
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Settings error:',
                    { message: e.message }
                );
            }
            throw new Error(e);
        } finally {
            client.release();
        }
    }

    async fetchStatisticsData() {
        const client = await pool.connect();
        try {
            // const query = ``;
            // const res = await client.query(query);

            return { perMonthDownload: '20/25', perWeekDownload: '22/10' };
        } catch (e) {
            console.log('error message', e.message);
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Settings error:',
                    { message: e.message }
                );
            }
            throw new Error(e);
        } finally {
            client.release();
        }
    }

}

export default new StatisticsController();