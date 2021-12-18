import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import { routes } from './router';

//============= FIREBASE CREDENCIALES ================//
admin.initializeApp(functions.config().firebase);
//============= FIREBASE BASE DE DATOS ================//
const db = admin.firestore(); //Base de datos de collections & documents
db.settings({ignoreUndefinedProperties : true, timestampsInSnapshot: true});

//============= SERVIDOR EXPRESS ================//
const server = express();
server.use(cors({origin: true}));

//============= RUTAS ================//
routes(server);

//============= EXPORTACION DEL SERVIDOR ================//
export { db };
export const api = functions.https.onRequest(server);
