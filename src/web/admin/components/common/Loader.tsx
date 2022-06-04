import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface Props {
  classNames?: string
}

const variants = {
  animation: {
    background: [
      'linear-gradient(270deg, rgba(203, 201, 201, 0.098) 40.6%, rgba(122, 122, 122, 0.138) 100%)',
      'linear-gradient(270deg, rgba(122, 122, 122, 0.138) -3.68%, rgba(203, 201, 201, 0.098) 100%)',
    ],
    transition: {
      background: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
}

const Loader: React.FC<Props> = ({ classNames = '' }) => {
  return (
    <motion.div
      className={clsx('h-4', 'w-full', 'rounded', classNames)}
      variants={variants}
      animate="animation"
    />
  )
}

export default Loader
