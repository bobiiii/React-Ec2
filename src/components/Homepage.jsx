import BestSellers from './BestSellers'
import Hero from './Hero'
import NewArrivals from './NewArrivals'
import Speacials from './Speacials'
import Trending from './Trending'
import WallHerbLive from './WallHerbLive'

function Homepage() {
  return (
    <>
      <div className="container">
        <Hero />
        <Speacials />
        <Trending />
        <BestSellers />
        <NewArrivals />
        <div className="mt-4">
          {' '}
          <WallHerbLive />
        </div>
      </div>
    </>
  )
}

export default Homepage
