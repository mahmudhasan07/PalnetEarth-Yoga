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
import CategoriesInfo from './Components/Catagory/CategoriesInfo.jsx';
import Login from './Components/User/Login.jsx';
import Registration from './Components/User/Registration.jsx';
import Benefits from './Components/Benefits/Benefits.jsx';
import Class from './Components/Class/Class.jsx';
import ShowCard from './Components/Class/ShowCard.jsx';
import Service from './Components/Service/Service.jsx';
import ServiceInfo from './Components/Service/ServiceInfo.jsx';
import ConTextApi from './Components/User/ConTextApi/ConTextApi.jsx';
import Contact from './Components/Contact/Contact.jsx';
import BookMark from './Components/BookMark/BookMark.jsx';
import PrivetRouter from './Components/Router/PrivetRouter.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
        loader: () => fetch('../public/BannerYoga.json')
      },
      {
        path : '/',
        element : <Benefits></Benefits>
      },
      {
        path : '/',
        element : <Service></Service>,

        // loader : ()=> fetch('../public/Service.json')
      },
      {
        path : "/service/:id",
        element : <PrivetRouter><ServiceInfo></ServiceInfo></PrivetRouter>,
        loader : ()=> fetch('../public/Service.json')
      },
      {
        path: '/teachers',
        element: <Teachers></Teachers>,
        loader: () => fetch('../public/Teacher.json')
      },
      {
        path: '/teachers/:id',
        element: <PrivetRouter><TeacherInfo></TeacherInfo></PrivetRouter>,
        loader: () => fetch('../public/Teacher.json')
      },
      {
        path: '/category',
        element: <Category></Category>,
        loader : ()=> fetch('../public/TypesYoga.json')
      },
      {
        path : "/category/:id",
        element : <CategoriesInfo></CategoriesInfo>,
        loader : ()=> fetch('../public/TypesYoga.json')
      },
      {
        path : "/bookmark",
        element : <BookMark></BookMark>,
        loader : ()=> fetch('../public/Classitem.json')
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/classes",
        element : <PrivetRouter><Class></Class></PrivetRouter>,
        children: [
          {
            path : "/classes/:id",
            element : <ShowCard></ShowCard>,
            loader : ()=> fetch("../public/Classitem.json")
          }
        ]
      }
    ]
  },
  {
    path : "/login",
    element : <Login></Login>
  },
  {
    path : "/registration",
    element : <Registration></Registration>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ConTextApi>
    <RouterProvider router={router}></RouterProvider>
    </ConTextApi>
  </React.StrictMode>,
)
