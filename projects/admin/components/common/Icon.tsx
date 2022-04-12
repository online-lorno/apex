import React from 'react'

import HeroIcon, { HeroIconName } from '@components/common/HeroIcon'
import MaterialIcon, { MaterialIconName } from '@components/common/MaterialIcon'

export type IconName = HeroIconName | MaterialIconName

interface Props {
  icon: IconName
  type: 'hero' | 'material'
  solid?: boolean // for hero icons
  classNames?: string
}

// TODO: fix error when icon is not within hero or material icon type
const Icon: React.FC<Props> = ({
  icon,
  type,
  classNames = '',
  solid = false,
}) => {
  const Icon =
    type === 'hero' ? (
      <HeroIcon
        icon={icon as HeroIconName}
        classNames={classNames}
        solid={solid}
      />
    ) : (
      <MaterialIcon icon={icon as MaterialIconName} classNames={classNames} />
    )

  return Icon
}

export default Icon
