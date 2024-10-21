import Head from 'next/head'

export default function Journal() {
  return (
    <>
      <Head>
        <title>Journal - Shoshin Trading Journal</title>
        <meta name="description" content="Your trading journal entries" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Journal</h1>
        <p>Keep track of your trading thoughts and strategies here.</p>
      </div>
    </>
  )
}
