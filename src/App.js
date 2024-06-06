
import './App.css';
import { Route , Routes, useParams} from 'react-router-dom';
import Home from './components/components/Home/Home';
import TestRoute from './components/TestRoute';
import { data } from './components/apidata/Data';




function App() {

  const { id } = useParams();
  const service = data.find(s => s.id.toString() === id);

  if (service) {
    return <div>Service not found</div>;
  }

  else {
    return (
   
      <>
        <Routes>
           <Route path='/' element={<Home/>}>Home</Route>
           <Route path={``}>{}</Route>
           <Route path='/test' element={<TestRoute/>}>Route</Route>
        </Routes>
      </>
   
     );
  }
  
}

export default App;
