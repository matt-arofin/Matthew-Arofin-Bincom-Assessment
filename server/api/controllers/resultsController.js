import express from 'express';
// import knex from 'knex';
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

// Controller function to insert new polling unit results from array into database
const createEntry = async (resultArray) {
  const createdEntries = [];

  for (const result of resultArray) {
    try {
      const result = await knex.transaction(async (trx) => {
        const [insertedEntry] = await trx('polling_unit_reulsts')
        .insert(result)
        .returning('*');

        return insertedEntry;
      });

      createdEntries.push(result)
    } catch (error) {
      console.error('Error creating entry:' error);
    }
  }

  return createdEntries
};

export { getPollingUnitResult, getTotalResults, createEntry };