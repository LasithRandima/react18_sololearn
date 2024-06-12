import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; // used for get value of dynamic urls
import Spinner from '../components/Spinner';


const JobPage = () => {
    const {id} = useParams(); // use params is used to get the value of dynamic urls like ids
    // console.log(id);
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchjob = async() =>{
            try {
                const response = await fetch(`/api/jobs/${id}`);
                const data = await response.json();
                console.log(data);
                setJob(data);
              } catch (error) {
                console.log('Error Fetching Data', error);
              } finally {
                setLoading(false);
              }
        }

        fetchjob();
        
    }, []);


  return loading ? <Spinner /> : (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
}

// we can create this page using react router data loaders without having useEffect

export default JobPage