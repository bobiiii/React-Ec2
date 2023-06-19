import Header from "./Header"
import Footer from "./Footer"

// import Main from "./Main"
// eslint-disable-next-line react/prop-types
function Layout({ children, excludeHeaderFooter }) {
  return (
    <>
       {!excludeHeaderFooter && <Header />}
      <main>{children}</main>
      {!excludeHeaderFooter && <Footer />}
    </>
  )
}

export default Layout