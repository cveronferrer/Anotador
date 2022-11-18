import { Formik, Form, Field, ErrorMessage} from 'formik';
import { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';

function NotesForm(){
    const { add } = useContext(NotesContext);
    return (
        <Formik className='require'
            initialValues= {{ title: '', message:''}} 
            validate = { values => {
            const errors={};
            if(!values.title){
                errors.title = 'El titulo es requerido';
            } else if(!values.message){
                errors.message='El mensaje es requerido';
            }
            return errors;
        }}
        onSubmit={
            (values, { setSubmitting }) => {
                add(values.title, values.message);
                setSubmitting(false);
                values.title= '';
                values.message= '';
            }
        }
        >
            {
                ({ isSubmitting })=>{
                    return (<Form className='form'>
                        <div>
                            <label htmlFor='title'>Título</label>
                            <Field type='text' name='title' />
                            <ErrorMessage name='title' component='p' />
                        </div>
                        <div>
                            <label htmlFor='message'>Qué quieres guardar</label>
                            <Field as='textarea' name='message' />
                            <ErrorMessage name='message' component='p' />
                        </div>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'Guardando nota...' : 'Guardar nota'}
                        </button>
                    </Form>)
                }
            }
        </Formik>
    )
}

export default NotesForm;