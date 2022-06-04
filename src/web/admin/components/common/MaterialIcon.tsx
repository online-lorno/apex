// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-942136861
import React from 'react'
import clsx from 'clsx'
import * as MaterialIcons from '@mui/icons-material'

export type MaterialIconName = keyof typeof MaterialIcons

interface Props {
  icon: MaterialIconName
  classNames?: string
}

const MaterialIcon: React.FC<Props> = ({ icon, classNames = '' }) => {
  const Icon = MaterialIcons[icon]

  return <Icon className={clsx('w-4', 'h-4', 'mr-0.5', classNames)} />
}

export default MaterialIcon
