import express from 'express';
import { getPollingUnitResult, getTotalResults } from '../controllers/resultsController';
import pollingUnitResultSchema from '../../db/schema/newPollingUnitSchema';

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
    const validatedData = await pollingUnitResultSchema.validate(req.body);
    const createdEntry = await pollingUnitResultController.createEntry(validatedData);
    res.status(201).json({ message: 'Entry created successfully', data: createdEntry });
  } catch (validationError) {
    res.status(400).json({ error: validationError.errors });
  }
});

export default router;