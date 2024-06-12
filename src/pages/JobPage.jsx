import { useParams, useLoaderData } from 'react-router-dom'; // used for get value of dynamic urls
import Spinner from '../components/Spinner';


const JobPage = () => {
    const {id} = useParams(); // use params is used to get the value of dynamic urls like ids
    
    const job = useLoaderData(); // useLoaderData is used to get the data from data loader


  return  (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
    </div>
  );
}

// we can create this page using react router data loaders without having useEffect
const jobLoader = async({params}) => {
    // const {id} = params;
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
}

// exporting data loader and jsx component as well
export { JobPage as default, jobLoader };