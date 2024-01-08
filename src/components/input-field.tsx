import { Label, TextInput } from '@/ui';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'phone';
  placeholder?: string;
  error?: string;
} & UseFormRegisterReturn

export const InputField = ({ placeholder, error, label = '', type = 'text', ...props }: Props) => (
  <div className='flex flex-col gap-2'>
    <Label name={props.name} label={label} />
    <TextInput type={type} placeholder={placeholder} {...props} />
    {error && <p>{error}</p>}
  </div>
)