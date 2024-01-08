type Props = {
  label: string;
  name: string;
}

export const Label = ({ label, name }: Props) => {
  return label ? (
    <label
      htmlFor={name}
      className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
    >
      {label}
    </label>
  ) : null
};
