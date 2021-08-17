import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ViewMore from './ViewMore';
import './StarWars.css'
import { Link,Route,useParams} from 'react-router-dom';

function People(props){
   const { films } = props

   // console.log(people)


   if(!films){
      return <div>Loading movie information...</div>;
   }

   return(
   <div>
      
  <Typography className='text-center fs-1 my-4'>FILMS</Typography>
   <div className='d-flex justify-content-betweeb  flex-wrap container align-items-center mb-5 mt-5'>

    {films.map( film => (
       <Card className='card text-start shadow-lg card-color mb-3 mx-2 card-effect' style={{width:22 +'rem'}}>
        <CardContent>
            <Typography className='fs-6 '>
               <b>Title :</b> <span>{film.title}</span> 
            </Typography>

            <Typography >
            <b>Episode ID :</b><span>{film.episode_id}</span> 
            </Typography>

            <Typography >
            <b>Director :</b> <span>{film.director} </span>
            </Typography>
          
            <Typography >
            <b>producer :</b> <span> {film.producer}cm</span>
            </Typography>
          
            <Typography >
            <b>Created :</b> <span> {film.created}</span>
            </Typography>
          
            <Typography >
            <b>Edited :</b> <span> {film.edited}</span>
            </Typography>
          
                     
         </CardContent>
         <Route path='/Film/ViewMore'>
         <ViewMore view={film }/>
         </Route>
         <Link to='/Film/ViewMore'>
         <button className='col-4 btn btn-dark VeiwMore-btn my-2'>
            View More
         </button>
         </Link>
        
      </Card> 
    ))}
     
      </div>
      </div>   
   )
}

export default People;