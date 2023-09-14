import express from 'express';
import { getPollingUnitResult, getTotalResults } from '../controllers/resultsController'

const router = express.Router();

// GET result for individual polling units (By PU Unique ID)
// Should return the result of an individual polling unit
router.get('/polling-unit/:id', getPollingUnitResult);

// GET aggregate results of polling units in LGAs (By LGA Unique ID)
//
router.get('/lga/:lga', getTotalResults);

// POST new polling unit results including votes for all parties
router.post('/polling-unit/new', async (req, res) => {
  try {
    const newPoll = await resultsModel.query().insert(req.body);
    res.status(201).json(newPoll);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router