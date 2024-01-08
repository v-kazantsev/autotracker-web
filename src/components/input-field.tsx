import { useField, FieldProps } from 'react-final-form';
import { Label, TextInput } from '@/ui';

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
} & FieldProps<any, any>

export const InputField = ({ name, label = '',  ...props }: Props) => {
  const {
    input,
    meta: { error, touched },
  } = useField(name);
  const invalid = error && touched;
  return (
  <div className='flex flex-col gap-2'>
    <Label name={props.name} label={label} />
    <TextInput {...props} {...input} />
    {invalid && <p>{error}</p>}
  </div>
)};
