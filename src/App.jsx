import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';




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

  const addJob = async (newJob) => {
    // console.log(newJob);
    try {
            const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob),
            });
            return;
    
            // if (response.ok) {
            // alert('Job Added Successfully');
            // } else {
            // alert('Failed to Add Job');
            // }
        } catch (error) {
            console.log('Error Adding Job', error);
        }
  }
  
  const router = createBrowserRouter(
    // createRoutesFromElements(<Route index element={<h1>My App</h1>} />)    // root url - index
    // createRoutesFromElements(<Route path='/about' index element={<h1>My App</h1>} />) //other urls paths
  
    // createRoutesFromElements(<Route index element={<HomePage />} />) // element is jsx page component
  
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        {/* pass a function as props to child component */}
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />  
  
        {/* defining dyanamin urls */}
        {/* <Route path='/jobs/:id' element={<JobPage />} />  */}
  
        {/* using data loaders */}
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} /> 
  
        <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
  
  );


  return <RouterProvider router={router} />;
};

export default App
