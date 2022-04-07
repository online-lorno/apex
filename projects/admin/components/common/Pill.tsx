import React, { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  text: string;
  icon?: ReactNode;
  transparent?: boolean;
  type?: 'info' | 'success';
};

const Pill: React.FC<Props> = ({ text, icon, transparent = false, type }) => {
  return (
    <div
      className={clsx(
        'py-1',
        'pl-2.5',
        'pr-2',
        'text-xs',
        'inline-flex',
        'justify-around',
        'content-center',
        'rounded-lg',
        'text-gray-600',
        {
          'bg-gray-100': !type && !transparent,
        },
        {
          'font-bold': type !== undefined,
        },
        {
          'bg-blue-100': type && type === 'info',
          'text-blue-600': type && type === 'info',
        },
        {
          'bg-lime-200': type && type === 'success',
          'text-lime-600': type && type === 'success',
        }
      )}
    >
      {icon}
      {text}
    </div>
  );
};

export default Pill;
