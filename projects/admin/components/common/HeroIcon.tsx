// https://github.com/tailwindlabs/heroicons/issues/278#issuecomment-942136861
import React from 'react'
import clsx from 'clsx'
import * as SolidIcons from '@heroicons/react/solid'
import * as OutlineIcons from '@heroicons/react/outline'

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons

interface Props {
  icon: IconName
  classNames?: string
  solid?: boolean
}

const HeroIcon: React.FC<Props> = ({
  icon,
  classNames = '',
  solid = false,
}) => {
  const Icon = solid ? SolidIcons[icon] : OutlineIcons[icon]

  return <Icon className={clsx('w-4', 'h-4', 'mr-0.5', classNames)} />
}

export default HeroIcon
