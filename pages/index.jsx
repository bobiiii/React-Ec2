
import { memo } from "react"
import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import NewArrivals from "../components/NewArrivals"
import Speacials from "../components/Speacials"
import Trending from "../components/Trending"
import WallHerbLive from "../components/WallHerbLive"
import Head from "next/head"
import Layout from "@/components/Layout"


function Homepage() {
  return (
    <>
      <Head>
        
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React</title>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 

      </Head>
      <Layout>
        {/* <Hero /> */}
        <div className="">
          <Speacials />
          <Trending />
          <BestSellers/>
          <NewArrivals/>
          <WallHerbLive/>
        </div>
      </Layout>
    </>
  )
}

export default memo(Homepage)