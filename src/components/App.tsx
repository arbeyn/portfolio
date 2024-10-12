import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from 'pages/Homepage/Homepage'
import About from 'pages/About/About'

function App() {
  // const portfolio = useRef(null)
  // const contact = useRef(null)

  return (
    <div className="min-h-dvh bg-bg-primary">
      <div className="h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: 'about',
    element: <About />
  }
])

export default App
