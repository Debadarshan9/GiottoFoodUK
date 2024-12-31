import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GiottoFoodUK from "./pages/GiottoFoodUK"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import { CartProvider } from "./context/cartContext"

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
      
    },
    {
      path:"/giottofood",
      element:<GiottoFoodUK/>
      
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/products",
      element:<Products/>
    },
    
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/product",
      element:<SingleProduct/>
    }

  ])
  return (
    // <>
    <CartProvider>
      <RouterProvider router={appRouter}/>
    </CartProvider>
    // </>
  )
}

export default App
