import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shoshin Trading Journal</title>
        <meta name="description" content="Track and analyze your trades" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Welcome to Shoshin Trading Journal</h1>
        <p>Start tracking your trades and improve your performance.</p>
      </div>
    </>
  )
}
