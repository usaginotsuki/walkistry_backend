import {Application} from 'express';
import { listRoutes } from './controllers/routes_controller';
import { getUser } from './controllers/user_controller';

export function routes(app: Application){
    app.get('/routes', listRoutes);    
    app.get('/users/:id', getUser);
}