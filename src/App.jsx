import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"
import Dashboard from "./components/Dashboard"
import Saleandoffers from "./components/Saleandoffers"
import Blogs from "./components/Blogs"
import Corporate from "./components/Corporate"
import Affilliates from "./components/Affilliates"
import Recommendation from "./components/Recommendation"
import Community from "./components/Community"
import Aboutus from "./components/Aboutus"
function App() {
  return (
        <Layout>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/check" element={<Checkout/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/sale" element={<Saleandoffers/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/cor" element={<Corporate/>}/>
        <Route path="/aff" element={<Affilliates/>}/>
        <Route path="/rec" element={<Recommendation/>}/>
        <Route path="/com" element={<Community/>}/>
        <Route path="/about" element={<Aboutus/>}/>
      </Routes>
    </Layout>
      
  )
}

export default App