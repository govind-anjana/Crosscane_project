import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import AllRoutes from "./routes/routes"

function App() {
  return (
     <div>
      <BrowserRouter>
        <ScrollToTop />
          <AllRoutes />
      </BrowserRouter>
     </div>
  )
}

export default App
