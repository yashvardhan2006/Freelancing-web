
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom'

import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import Recruiter from './components/Recruiter/Recruiter.jsx'
import Recruiterhome from './components/Recruiterhome.jsx'
import Chat from './components/Chat/Chat.jsx'
import Digital from './components/Homepages/Digital.jsx'
import Graphic from './components/Homepages/Graphic.jsx'
import Machine from './components/Homepages/Machine.jsx'
import Artificial from './components/Homepages/Artificial.jsx'
import Webdev from './components/Homepages/Webdev.jsx'

import { SocketContextProvider } from "./context/SocketContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Jobapplication from './components/Jobapplication.jsx'



const router =createBrowserRouter([
  {
    path:"/",
    element:<Signin/>
  },
{
  path:"/Signup",
  element:<Signup/>
},
{ 
  path:"/Signin",
  element:<Signin/>
},
{ 
  path:"/Home",
  element:<Home/>
},
{ 
  path:"/Recruiter",
  element:<Recruiter/>
},
{ 
  path:"/Recruiterhome",
  element:<Recruiterhome/>
},
{ 
  path:"/Profile",
  element:<Profile/>
},
{ 
  path:"/Application",
  element:<Jobapplication/>
},
{ 
  path:"/Chat",
  element:<Chat/>
},
{ 
  path:"/digital",
  element:<Digital/>
},
{ 
  path:"/machine",
  element:<Machine/>
},
{ 
  path:"/web",
  element:<Webdev/>
},
{ 
  path:"/graphic",
  element:<Graphic/>
},
{ 
  path:"/artificial",
  element:<Artificial/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  // <StoreContextProvider> 
  // <SocketContextProvider>
  // <App />
  // </SocketContextProvider>
  // </StoreContextProvider> 
  // </BrowserRouter>
  <RouterProvider router={router}/>
  
)
