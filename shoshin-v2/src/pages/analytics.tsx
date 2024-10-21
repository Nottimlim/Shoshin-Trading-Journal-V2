import Head from 'next/head'

export default function Analytics() {
  return (
    <>
      <Head>
        <title>Analytics - Shoshin Trading Journal</title>
        <meta name="description" content="Analyze your trading performance" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Analytics</h1>
        <p>Analyze your trading performance and trends here.</p>
      </div>
    </>
  )
}
