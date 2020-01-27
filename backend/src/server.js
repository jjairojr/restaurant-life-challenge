import app from './app';

require('dotenv/config');

app.listen(process.env.API_URL || 3333);
