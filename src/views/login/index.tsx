import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '@/components';
import { Button } from '@/ui';

type Inputs = {
  email: string;
  password: string;
}

export const LoginView = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='w-96 p-6 flex flex-col rounded-md shadow-md items-center gap-4' onSubmit={handleSubmit(onSubmit)}>
        <InputField type='email' label='Email' {...register('email', { required: true})} />
        <InputField type='password' label='Пароль' {...register('password', { required: true })} />
        <Button type='submit' variant='outline' className='px-12'>Логин</Button>
      </form>
    </div>
  )
};
