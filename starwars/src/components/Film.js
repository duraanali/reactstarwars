import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Home from './Home';
import Typography from '@material-ui/core/Typography';
import './StarWars.css'

function People(props){
   const { films } = props

   // console.log(people)

   if(!films){
      return <div>Loading movie information...</div>;
   }

   return(
   <div>
        <Home/>

   <div className='d-flex justify-content-betweeb  flex-wrap container align-items-center mb-5 mt-5'>
    {films.map( film => (
       <Card className='card text-start shadow-lg card-color mb-3 mx-2 card-effect' style={{width:18 +'rem'}}>
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
          
                     
         </CardContent>
      </Card> 
    ))}
     
      </div>
   </div>
   )
}

export default People;