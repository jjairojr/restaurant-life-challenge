import app from './app';
import { BASE_URL } from './.env.json';

app.listen(BASE_URL || 3333);
