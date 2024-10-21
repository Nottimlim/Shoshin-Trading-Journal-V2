import Head from 'next/head'

export default function Journal() {
  return (
    <>
      <Head>
        <title>Journal - Shoshin Trading Journal</title>
        <meta name="description" content="Shoshin Trading Journal Entries" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Journal</h1>
        <p>Your trading journal entries will appear here.</p>
        {/* Add journal entry form and list here */}
      </div>
    </>
  )
}
