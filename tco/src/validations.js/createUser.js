import * as Yup from 'yup';

export const createUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    job: Yup.string().required('Job is required'),
});
