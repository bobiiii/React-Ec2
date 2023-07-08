import { useMediaQuery } from '@mui/material'
import BestSellers from './BestSellers'
import Hero from './Hero'
import NewArrivals from './NewArrivals'
import Speacials from './Speacials'
import Trending from './Trending'
import WallHerbLive from './WallHerbLive'

function Homepage() {
  const matches = useMediaQuery('(min-width:1450px)')
  return (
    <>
      <div className={matches && 'container'} style={{ background: '#fafafa' }}>
        <Hero />
        <Speacials />
        <div className="my-2">
          {' '}
          <Trending />
        </div>
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
