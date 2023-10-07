import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Banner from './Components/Banner/Banner.jsx';
import Teachers from './Components/Teachers/Teachers.jsx';
import TeacherInfo from './Components/Teachers/TeacherInfo.jsx';
import Category from './Components/Catagory/Category.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('../public/BannerYoga.json')
      },
      {
        path: '/teachers',
        element: <Teachers></Teachers>,
        loader: () => fetch('../public/Teacher.json')
      },
      {
        path: '/teachers/:id',
        element: <TeacherInfo></TeacherInfo>,
        loader: () => fetch('../public/Teacher.json')
      },
      {
        path: '/category',
        element: <Category></Category>,
        loader : ()=> fetch('../public/TypesYoga.json')
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)