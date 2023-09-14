import express from 'express';
import resultsModel from '../models/resultsModels';



const router = express.Router();

// GET result for individual polling units (By PU Unique ID)
// Should return the result of an individual polling unit
router.get('/:id', async (req, res) => {
  try {
    const results = await resultsModel.query();
    res.status(200).json(results)
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET aggregate results of polling units in LGAs (By LGA Unique ID)
//
router.get('/:id', async (req, res) => {
  try {

  } catch(error) {
    
  }
});

// POST new polling unit results including votes for all parties
router.post('/', async (req, res) => {
  try {
    const newPoll = await resultsModel.query().insert(req.body);
    res.status(201).json(newPoll);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});