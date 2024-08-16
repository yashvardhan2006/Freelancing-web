import express from 'express';
import { createJobListing, listJob } from '../controllers/jobController.js'; 

const jobRouter = express.Router();

jobRouter.post('/createJob', createJobListing);
jobRouter.get("/list", listJob)

export default jobRouter;