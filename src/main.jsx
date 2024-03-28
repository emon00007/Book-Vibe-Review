import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import PagesToRead from './Component/PagesToRead/PagesToRead';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import BookDetails from './Component/BookDetails/BookDetails';
import Footer from './Component/Footer/Footer';
import BestSeller from './Component/BestSeller/BestSeller';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/ListedBooks",
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch("/book.json")
      },
      {
        path:"/PagesRead",
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch("/book.json")
      },
      {
         path:"/details/:id",
         element:<BookDetails></BookDetails>,
         loader:()=>fetch("/book.json")
      },
      {
        path:"/Contact",
        element:<Footer></Footer>
      },
      {
        path:"/BestSeller",
        element:<BestSeller></BestSeller>,
        // loader:()=>fetch("/bestSeller.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
