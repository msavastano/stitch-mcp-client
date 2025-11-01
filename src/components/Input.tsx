import React from 'react';
import Icon from './Icon';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ leftIcon, label, ...props }, ref) => {
  return (
    <label className="flex flex-col min-w-40 w-full">
      {label && <p className="pb-2 text-base font-medium leading-normal text-zinc-700 dark:text-zinc-300">{label}</p>}
      <div className="flex w-full flex-1 items-stretch rounded-lg bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary">
        {leftIcon && (
          <div className="text-gray-400 dark:text-gray-500 flex items-center justify-center pl-4">
            <Icon name={leftIcon} />
          </div>
        )}
        <input
          ref={ref}
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-2 text-base font-normal leading-normal"
          {...props}
        />
      </div>
    </label>
  );
});

export default Input;
