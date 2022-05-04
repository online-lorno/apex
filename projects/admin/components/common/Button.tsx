import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  text?: string
  type?: 'default' | 'success'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  classNames?: string
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  text = '',
  type = 'default',
  icon,
  iconPosition = 'left',
  classNames = '',
  disabled = false,
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
          'bg-white': type && type === 'default' && !disabled,
          'border-gray-300': type && type === 'default' && !disabled,
          'hover:bg-gray-100': type && type === 'default' && !disabled,
          // disabled
          'bg-gray-50': type && type === 'default' && disabled,
          'border-gray-200': type && type === 'default' && disabled,
          'text-gray-400': type && type === 'default' && disabled,
        },
        {
          'bg-lime-400': type && type === 'success' && !disabled,
          'border-lime-500': type && type === 'success' && !disabled,
          'hover:bg-lime-500': type && type === 'success' && !disabled,
          // disabled
          'bg-lime-300': type && type === 'success' && disabled,
          'border-lime-400': type && type === 'success' && disabled,
          'text-gray-400': type && type === 'success' && disabled,
        },
        classNames
      )}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <>{icon}</>}
      {text}
      {icon && iconPosition === 'right' && <>{icon}</>}
    </button>
  )
}

export default Button
