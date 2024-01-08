import { cva } from 'class-variance-authority';

export const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      danger: ['bg-red-100'],
      outline: ['hover:bg-gray-100', 'border border-indigo-600']
    },
    size: {
      default: ['rounded', 'p-2'],
      icon: ['rounded-full', 'w-10', 'h-10', 'flex', 'items-center', 'justify-center', 'p-2.5']
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  }
});
