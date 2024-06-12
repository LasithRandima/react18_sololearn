import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';


const JobPage = () => {
    const {id} = useParams();
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

export default JobPage