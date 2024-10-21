import Head from 'next/head'

export default function Trades() {
  return (
    <>
      <Head>
        <title>Trades - Shoshin Trading Journal</title>
        <meta name="description" content="View and manage your trades" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Trades</h1>
        <p>Here you can view and manage your trades.</p>
      </div>
    </>
  )
}
