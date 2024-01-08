import { Form } from 'react-final-form';
import { InputField } from '@/components';
import { Button } from '@/ui';
import { FIELD_EMPTY_ERR } from '@/config/messages';

type Errors = {
  email?: string;
  password?: string;
}

export const LoginView = () => {
  const onSubmit = (values: any) => {
    return console.log(values)
  }

  const validate = (values: any) => {
    const errors: Errors = {};
    if (!values.email) {
      errors.email = FIELD_EMPTY_ERR
    }
    if (!values.password) {
      errors.password = FIELD_EMPTY_ERR
    }
    return errors;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='w-96 p-6 flex flex-col rounded-md shadow-md items-center gap-4' noValidate>
          <InputField type='email' label='Email' name='email' required  />
          <InputField type='password' label='Пароль' name='password' required />
          <Button type='submit' variant='outline' className='px-12'>Логин</Button>
        </form>)}
      />
    </div>
  )
};
