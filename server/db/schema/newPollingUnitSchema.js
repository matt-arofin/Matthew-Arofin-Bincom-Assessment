import yup from 'yup';

const pollingUnitSchema = yup.object().shape({
  result_id: yup
    .int
})