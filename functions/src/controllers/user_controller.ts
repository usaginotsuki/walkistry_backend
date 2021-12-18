//import * as admin from 'firebase-admin';
import {db} from '../index';
import {Request, Response} from 'express';

export async function getUser(req: Request, res: Response) {
    try{
        //get a user profile from firebase collection
        let snapshot = await db.collection("users").doc(req.params.id).get();
        return res.status(200).json(snapshot.data());        
    }
    catch(err){
        return handleError(res, err);
    }
}


  
function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
