import type { NextPage } from 'next';
import Head from 'next/head';
import { TagIcon } from '@heroicons/react/outline';

import Pill from '@components/common/Pill';

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apex Admin - Components</title>
        <meta name="description" content="Apex Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto pt-4">
        <div className="mb-4">
          <h1 className="uppercase">Pill Labels</h1>
          <div className="flex items-center">
            <Pill
              text="Available"
              icon={<TagIcon className="w-4 h-4 mr-0.5" />}
              transparent
            />
            <Pill
              text="Available"
              icon={<TagIcon className="w-4 h-4 mr-0.5" />}
            />
            <Pill text="Available" type="info" />
            <Pill text="Sold" type="success" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
