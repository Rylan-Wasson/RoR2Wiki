import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider} from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';

import CalculatorPage from './Pages/CalculatorPage.jsx';
import CommunityPage from './Pages/CommunityPage.jsx';
import LinksPage from './Pages/LinksPage.jsx';

import SurvivorsPage from './Pages/SurvivorsPage.jsx';
import ItemsPage from './Pages/ItemsPage.jsx';
import MonstersPage from './Pages/MonstersPage.jsx';
import EnvironmentsPage from './Pages/EnvironmentsPage.jsx';
import ArtifactsPage from './Pages/ArtifactsPage.jsx';
import InteractablesPage from './Pages/InteractablesPage.jsx';
import NewsPage from './Pages/NewsPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import AccountPage from './Pages/AccountPage.jsx';

const router = createBrowserRouter([
  {path: '/', element: <App/>,
    children: [
      {index:true, element: <HomePage/>},
      {path: '*', element: <PageNotFound/>},

      {path: '/calculator', element: <CalculatorPage/>},
      {path: '/community', element: <CommunityPage/>},
      {path: '/news', element: <NewsPage/>},
      {path: '/links', element: <LinksPage/>},

      {path: '/survivors', element: <SurvivorsPage/>},
      {path: '/items', element: <ItemsPage/>},
      {path: '/monsters', element: <MonstersPage/>},
      {path: '/environments', element: <EnvironmentsPage/>},
      {path: '/artifacts', element: <ArtifactsPage/>},
      {path: '/interactables', element: <InteractablesPage/>},

      {path: '/login', element: <LoginPage/>},
      {path: '/signup', element: <SignupPage/>},
      {path: '/account', element: <AccountPage/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
