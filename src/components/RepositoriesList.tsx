import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepositoriesList: React.FC = () => {

  const {SearchRepositories} = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repositories);

  console.log(data);
  console.log(error);
  console.log(loading);

    const onSubmit = (event: any) => {
      event.preventDefault();
      SearchRepositories(term);
    }
    
    const [term, setTerm] = useState('')
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input value={term} onChange={(e) => setTerm(e.target.value)}/>
          <button>Search</button>
        </form>
        {error && <h3>error</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && 
        data.map(d => {
          return <li key={d} style={{margin: '5px'}}>{d}</li>
        })
        }


      </div>
    );
  };
  
  export default RepositoriesList;
  