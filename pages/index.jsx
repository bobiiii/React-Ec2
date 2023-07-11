
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
      <Layout>
        <Hero />
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