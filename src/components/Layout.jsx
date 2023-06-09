import Header from "./Header"
import Footer from "./Footer"
import Hero from "./Hero"
import Speacials from "./Speacials"
// import Main from "./Main"
// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <>
    <Header/>
     <Hero/>
     <Speacials/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout