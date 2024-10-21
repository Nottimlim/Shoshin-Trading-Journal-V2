import Head from 'next/head'
import { useTrades } from '../hooks/useTrades'

export default function Analytics() {
  const { trades } = useTrades();

  return (
    <>
      <Head>
        <title>Analytics - Shoshin Trading Journal</title>
        <meta name="description" content="Shoshin Trading Journal Analytics" />
      </Head>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Analytics</h1>
        <p>Total trades: {trades.length}</p>
        {/* Add more analytics here */}
      </div>
    </>
  )
}
