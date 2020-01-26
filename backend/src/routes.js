import { Router } from 'express';
import MeatController from './app/controllers/MeatController';

const routes = Router();

routes.post('/saveMeats', MeatController.store);
routes.get('/showMeats', MeatController.index);

export default routes;
