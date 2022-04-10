import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  text: string
  type?: 'default' | 'success'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  classNames?: string
}

const Button: React.FC<Props> = ({
  text,
  type = 'default',
  icon,
  iconPosition = 'left',
  classNames = '',
}) => {
  return (
    <button
      className={clsx(
        'py-2',
        'px-4',
        'text-black',
        'text-base',
        'rounded',
        'inline-flex',
        'justify-around',
        'content-center',
        'items-center',
        'border',
        'drop-shadow',
        {
          'bg-white': type && type === 'default',
          'border-gray-300': type && type === 'default',
          'hover:bg-gray-100': type && type === 'default',
        },
        {
          'bg-lime-400': type && type === 'success',
          'border-lime-500': type && type === 'success',
          'hover:bg-lime-500': type && type === 'success',
        },
        classNames
      )}
    >
      {icon && iconPosition === 'left' && <>{icon}</>}
      {text}
      {icon && iconPosition === 'right' && <>{icon}</>}
    </button>
  )
}

export default Button
