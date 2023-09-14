import knex from 'knex';

// Define a database function to retrieve polling unit results by ID
const getPollingUnitResultById = async (id) => {
  try {
    const result = await knex('polling_unit_results').where('result_id', id);
    return result;
  } catch (error) {
    throw error;
  }
};

// Define a database function to retrieve total results for an LGA
const getTotalResultsByLGA = async (lga) => {
  try {
    const result = await knex('lga_results').where('lga', lga);
    return result;
  } catch (error) {
    throw error;
  }
};

export { getPollingUnitResultById, getTotalResultsByLGA };