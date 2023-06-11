
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Homepage from "./components/Homepage"
import Checkout from "./components/Checkout"
import Dashboard from "./components/Dashboard"
import Saleandoffers from "./components/Saleandoffers"
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/check" element={<Checkout/>}/>
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/sale" element={<Saleandoffers/>}/>


      </Routes>
      
    </Layout>
  )
}

export default App