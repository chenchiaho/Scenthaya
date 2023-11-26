import React, { FC } from 'react';

export interface CheckboxProps {
  label?: string;
  name: string;
  className?: string;
  sizeClassName?: string;
  labelClassName?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({
  label = '',
  name,
  className = '',
  sizeClassName = 'w-6 h-6',
  labelClassName = '',
  defaultChecked,
  onChange,
}) => {
  return (
    <div className={`flex ${className}`}>
      <input
        id={name}
        name={name}
        type='checkbox'
        className={`rounded border-gray-300 hover:border-gray-700 cursor-pointer ${sizeClassName}`}
        defaultChecked={defaultChecked}
      />
      {label && (
        <label htmlFor={name} className={`ml-2 ${labelClassName}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
