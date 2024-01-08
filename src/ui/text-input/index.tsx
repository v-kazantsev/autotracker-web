type Props = {
  name: string;
  placeholder?: string;
  type?: string;
}

export const TextInput = ({ name, type = 'text', ...props }: Props) => (
  <input
    type={type}
    id={name}
    autoComplete="off"
    className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
    {...props}
  />
);
