import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apex Admin</title>
        <meta name="description" content="Apex Admin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container p-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  )
}

export default Home
