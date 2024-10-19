import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import App from './App'
import Users from './pages/Users'
import Github from './pages/Github'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About />

//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'blog',
//         element: <Blog/>
//       }
//     ]

//   }

// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='blog' element={<Blog />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        loader={async () => {
          const response = await fetch('https://api.github.com/users/ch-ihtasham')
          return response.json()
        }}
        path='github'
        element={<Github />} />
      <Route path='users/:userid' element={<Users />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
