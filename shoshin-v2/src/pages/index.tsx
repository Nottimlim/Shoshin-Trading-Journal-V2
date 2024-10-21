import Head from 'next/head'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard - Shoshin Trading Journal</title>
        <meta name="description" content="Shoshin Trading Journal Dashboard" />
      </Head>
      <Dashboard />
    </>
  )
}
