import Button, { ButtonProps } from '@/shared/Button/Button';
import React from 'react';

export interface ButtonSecondaryProps extends ButtonProps {}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = 'border border-slate-300',
  ...args
}) => {
  return (
    <Button
      className={`bg-white text-slate-700 hover:bg-gray-100 ${className}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
