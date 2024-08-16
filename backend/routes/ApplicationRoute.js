import express from 'express';
import { ApplyNow,Appliedjob} from '../controllers/ApplicationController.js';




const ApplyRouter = express.Router();

ApplyRouter.post('/Apply', ApplyNow);
ApplyRouter.get('/Applied', Appliedjob);


export default ApplyRouter;