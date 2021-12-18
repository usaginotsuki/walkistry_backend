//import * as admin from 'firebase-admin';
import {db} from '../index';
import {Request, Response} from 'express';

export async function listRoutes(req: Request, res: Response) {
    try{
        let snapshot = await db.collection("rutas").get();

        return res.status(200).json(snapshot.docs.map(doc => doc.data()));
    }
    catch(err){
        return handleError(res, err);
    }
}


  
function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
