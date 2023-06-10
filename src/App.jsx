
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Homepage from "./components/Homepage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage/>}/>

      </Routes>
      
    </Layout>
  )
}

export default App