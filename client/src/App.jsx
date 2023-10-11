import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'

// import components
import PageNotFound from './pages/PageNotFound'
import Dramas from './pages/dramaList';
import Categories from './pages/dramaByCategories';

const App = () => {
  
  const [dramas, setDramas] = useState([]);


  useEffect(() => {
    const fetchDramas = async () => {
      const response = await fetch('http://localhost:3001/dramaList')
      const data = await response.json()
      setDramas(data)
    }
    fetchDramas()
  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Dramas data={dramas}/>
    },
    {
      path:"/action",
      element: <Categories categoryType='Action' />
    },
    {
      path:"/comedy",
      element: <Categories categoryType='Comedy' />
    },
    {
      path:"/drama",
      element: <Categories categoryType='Drama' />
    },
    {
      path:"/romance",
      element: <Categories categoryType='Romance' />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <h1>K-Dramas To Watch</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
        <div className='categorySelect'>
        <Link to="/action"><button className="categoryBtn">Action</button></Link>
        <Link to="/comedy"><button className="categoryBtn">Comedy</button></Link>
        <Link to="/drama"><button className="categoryBtn">Drama</button></Link>
        <Link to="/romance"><button className="categoryBtn">Romance</button></Link>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;