
import BestSellers from "./BestSellers"
import Hero from "./Hero"
import NewArrivals from "./NewArrivals"
import Speacials from "./Speacials"
import Trending from "./Trending"
import WallHerbLive from "./WallHerbLive"


function Homepage() {
  return (
    <>

      <Hero />
      <div className="">
      <Speacials />
      <Trending />
      <BestSellers/>
      <NewArrivals/>
      <WallHerbLive/>
      </div>
    </>
  )
}

export default Homepage