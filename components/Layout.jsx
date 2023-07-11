import Header from './Header'
import Footer from './Footer'
import HerbsChips from './HerbsChips'
import { useMediaQuery } from '@mui/material'

// import Main from "./Main"
// eslint-disable-next-line react/prop-types
function Layout({ children, excludeHeaderFooter }) {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <>
      {!excludeHeaderFooter && (
        <>
          {!matches && (
            <div className="mt-2 mb-2 ms-2 ">
              <HerbsChips />
            </div>
          )}
          <Header />
        </>
      )}
      <main>{children}</main>
      {!excludeHeaderFooter && <Footer />}
    </>
  )
}

export default Layout
