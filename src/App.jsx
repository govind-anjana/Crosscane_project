import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import AllRoutes from "./routes/routes"
import WhatsAppButton from "./components/common/WhatsAppButton"

function App() {
  return (
     <div>
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />
        <AllRoutes />
      </BrowserRouter>
     </div>
  )
}

export default App
