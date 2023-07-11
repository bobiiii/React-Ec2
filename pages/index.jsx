import { useMediaQuery } from '@mui/material'
import BestSellers from '../components/BestSellers'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import Speacials from '../components/Speacials'
import Trending from '../components/Trending'
import WallHerbLive from '../components/WallHerbLive'
import Layout from '@/components/Layout'

function Homepage() {
  const matches = useMediaQuery('(min-width:1450px)')
  return (
    <>
    <Layout>
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
      </Layout>
    </>
  )
}

export default Homepage
