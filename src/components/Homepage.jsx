
import BestSellers from "./BestSellers"
import Hero from "./Hero"
import NewArrivals from "./NewArrivals"
import Speacials from "./Speacials"
import Trending from "./Trending"
import Header from "./Header"
import Footer from './Footer'
function Homepage() {
  return (
    <>

      <Hero />
      <div className="my-3">
      <Speacials />
      <Trending />
      <BestSellers/>
      <NewArrivals/>
      </div>
    </>
  )
}

export default Homepage