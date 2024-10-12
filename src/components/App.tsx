import Header from './Header/Header'
import Hero from './Hero/Hero'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Homepage from 'pages/Homepage/Homepage'
function App() {
  // const portfolio = useRef(null)
  // const contact = useRef(null)

  return (
    <div className="min-h-dvh">
      <div className="">
        <div className="-mb-12 flex min-h-screen flex-col bg-bg-primary">
          <Header />
          <Hero />
        </div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Homepage />
  }
])

export default App
