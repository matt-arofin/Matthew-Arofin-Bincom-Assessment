import express from 'express';
import { getPollingUnitResultById, getTotalResultsByLGA } from '../models/resultsModels';

const router = express.Router();

// Controller function to get polling unit result by ID
const getPollingUnitResult = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getPollingUnitResultById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get total results by LGA
const getTotalResults = async (req, res) => {
  const { lga } = req.params;
  try {
    const result = await getTotalResultsByLGA(lga);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getPollingUnitResult, getTotalResults };