import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'

import requests from '@/utils/requests'

export default function Home({results}) {
  return (
    <>
      <Head>
        <title>Hulu - Krzysztof Szafran</title>
        <meta name="description" content="Hulu imitation by Krzysztof Szafran" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      {/* Header */}
      <Header />


      {/* Navbar */}
      <Navbar />


      {/* Results */}
      <Results results={results} />

    </>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;


  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
                        .then(res => res.json())

        return {
          props: {
            results: request.results
          }
        }

  
}
