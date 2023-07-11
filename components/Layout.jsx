import Header from "./Header"
import Footer from "./Footer"
import { memo } from "react"

function Layout({ children, excludeHeaderFooter }) {
  return (
    <>
       {!excludeHeaderFooter && <Header />}
      <main>{children}</main>
      {!excludeHeaderFooter && <Footer />}
    </>
  )
}

export default memo(Layout)