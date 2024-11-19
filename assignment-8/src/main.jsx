import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast';

import {
  RouterProvider,
} from "react-router-dom";
import routers from './router/Routers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
    <Toaster />
  </StrictMode>,
)
