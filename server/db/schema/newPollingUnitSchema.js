import yup from 'yup';

// Schema for polling unit result entry validation
const pollingUnitSchema = yup.object().shape({
  result_id: yup.number().integer(),
  polling_unit_uniqueid: yup.number().integer().required(),
  party_abbreviation: yup.string().trim().max(4).required('Party Abbreviation is required'),
  party_score: yup.number().integer().min(0).required('Party Score is required and must be a non-negative integer'),
  entered_by_user: yup.string().trim().required('Entered by User is required'),
  date_entered: yup.date().required('Date Entered is required').default(() => new Date()),
  user_ip_address: yup.string().ip().required('User IP Address is required'),
});

module.exports = pollingUnitSchema;