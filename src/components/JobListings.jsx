import React from 'react';
import { useEffect, useState } from 'react';
// import jobs from '../jobs.json';
import JobListing from '../components/JobListing.jsx';
import Spinner from '../components/Spinner.jsx';

const JobListings = ({isHome = false}) => {
    // console.log(jobs);
    // const jobListings = isHome ? jobs.slice(0, 3) : jobs;     // using jobs.json without server side

    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
          // limiting the number of jobs to 3 if it's the home page

          // create a proxy in vite.config and add the api url
          const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';   
          try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setJobListings(data);
          } catch (error) {
            console.log('Error Fetching Data', error);
          } finally {
            setLoading(false);
          }
           
        }

        fetchJobs();
    }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        

          {loading ? (<spinner loading={loading} />) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {jobListings.map((job) => (
                    <JobListing key={job.id} job={job} />
                    ))}
          </div>
          )}
          

          
      </div>
    </section>
  )
}

export default JobListings