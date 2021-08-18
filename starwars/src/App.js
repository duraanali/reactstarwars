import React,{useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import People from './components/People'
import Film from './components/Film';
import { Switch,Route,Link } from 'react-router-dom';
import Home from './components/Home';
import { Typography } from '@material-ui/core';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people,setPeople] = useState([]);
  const [films,setFilms] = useState([]);
  const [btn,setBtn] = useState([]);
  // console.log(people);
  // Fetch charactersn and films from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 useEffect(() => {
 const  getPeople = () => {
    axios
    .get('https://swapi.dev/api/people/?format=json')
   .then( res => {
    //  console.log(res.data)
     setPeople(res.data.results);
     setBtn(res.data);
  
    }).catch(error => {
      console.error();
    })

  
   }
 const  getFilm = () => {
    axios
    .get('https://swapi.dev/api/films/?format=json')
   .then( res => {
    //  console.log(res.data)
     setFilms(res.data.results);
    }).catch(error => {
      console.error();
    })

  
   }

   getPeople();
   getFilm();

 },[]);

  return (
    <div className='shadow'>

      {/* HEADER */}
         <div className="d-flex  flex flex-wrap container">
            <div  className='col-6'>
            <Typography className="my-4 fs-2 ms-5" >React Wars</Typography>
            </div>
    
    {/* LINK IS OF COMPONET  */}
            <nav className='col-3 d-flex my-4 fs-5 pe-5'>
                 <Link to='/' className='nav-link'>Home</Link>
                 <Link to='/People' className='nav-link'>People</Link>
                 <Link to='/Film'className='nav-link'>Film</Link>
                
            </nav>
 
          </div>
      
      {/* ROUTE  */}

      <Switch>
       <Route path='/People'>
       <People people={people}/>
       </Route>

       <Route path='/Film'>
       <Film films={films}/>
       </Route>

       <Route path='/'>
       <Home/>
       </Route>
      </Switch>

    </div>
  );
}

export default App;
