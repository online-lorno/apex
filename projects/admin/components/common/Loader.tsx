import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
  classNames?: string;
};

let timer: NodeJS.Timer;
const variants = {
  left: {
    background:
      'linear-gradient(270deg, rgba(203, 201, 201, 0.098) 40.6%, rgba(122, 122, 122, 0.138) 100%)',
  },
  right: {
    background:
      'linear-gradient(270deg, rgba(122, 122, 122, 0.138) -3.68%, rgba(203, 201, 201, 0.098) 100%)',
  },
};

const Loader: React.FC<Props> = ({ classNames = '' }) => {
  const [isLeft, setIsLeft] = useState(true);

  useEffect(() => {
    timer = setInterval(() => {
      setIsLeft((isLeft) => !isLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.div
      className={`h-4 w-full rounded bg-white ${classNames}`}
      animate={isLeft ? 'left' : 'right'}
      variants={variants}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
    />
  );
};

export default Loader;
