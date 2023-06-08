import Header from "./Header"
import Footer from "./Footer"
// import Main from "./Main"
// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout