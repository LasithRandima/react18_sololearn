import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

const router = createBrowserRouter(
  // createRoutesFromElements(<Route index element={<h1>My App</h1>} />)    // root url - index
  // createRoutesFromElements(<Route path='/about' index element={<h1>My App</h1>} />) //other urls paths

  // createRoutesFromElements(<Route index element={<HomePage />} />) // element is jsx page component

  createRoutesFromElements(
  <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      {/* defining dyanamin urls */}
      <Route path='/jobs/:id' element={<JobPage />} /> 
      <Route path='*' element={<NotFoundPage />} />
  </Route>
)

);

// const App = () => {
//   return (
//     <>
//       {/* before add router home page */}
//       <Navbar/>
//       <Hero title='Become a React Dev' />
//       <HomeCards/>
//       <JobListings/>
//       <ViewAllJobs/>

//     </>
//   )
// }


const App = () => {
  return <RouterProvider router={router} />;
};

export default App
