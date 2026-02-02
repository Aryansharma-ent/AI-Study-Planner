import express from 'express'
import { getPlans,getPlan,generatePlan} from '../Controllers/DataControllers.js';
const route = express.Router();

route.get('/', getPlans);
route.post('/generate', generatePlan);  // Must come BEFORE /:id routes
route.get('/:id', getPlan);

export default route;