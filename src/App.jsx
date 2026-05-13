import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop"
import AllRoutes from "./routes/routes"
import WhatsAppButton from "./components/common/WhatsAppButton"

import { Toaster } from "react-hot-toast"

function App() {
  return (
     <div>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTop />
        <WhatsAppButton />
        <AllRoutes />
      </BrowserRouter>
     </div>
  )
}

export default App
