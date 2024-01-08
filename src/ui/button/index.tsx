import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonStyles } from './styles';

type Props = VariantProps<typeof buttonStyles> & ComponentProps<'button'>
  

export const Button = ({ variant, size, className, ...props }: Props) => (
  <button {...props} className={twMerge(buttonStyles({variant, size}), className)} />
);
