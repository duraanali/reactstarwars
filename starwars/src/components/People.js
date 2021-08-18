import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../index.css'
import './StarWars.css'


function People(props){
   const { people } = props


   if(!people){
      return <div>Loading PEOPLE information...</div>;
   }


   return(
   <div>

    {/* TITLE  */}
   <Typography className=' text-center fs-1 my-4'>PEOPLE</Typography>

   {/* CONTAINER PEOPLE */}
   <div className='d-flex justify-content-between  flex-wrap container align-items-center mt-5 mb-5  Cards'>

      {/* LOOP API PROPS  */}

    {people.map( person => (
     <div>

      {/* EACH PEOPLE CARD  */}

       <Card className='card text-start shadow-lg card-color mb-3 card-effect  zindex' style={{width:22 +'rem'}} >
        <CardContent>
            <Typography className='fs-6 '>
               <b>Name :</b> <span>{person.name}</span> 
            </Typography>

            <Typography >
            <b>Gender :</b><span>{person.gender}</span> 
            </Typography>

            <Typography >
            <b>Brith_year :</b> <span>{person.birth_year} </span>
            </Typography>
          
            <Typography >
            <b>Height :</b> <span> {person.height}cm</span>
            </Typography>
          
            <Typography >
            <b>Mass :</b> <span> {person.mass}kg </span>
            </Typography>
          
            <Typography >
            <b>Skin Color:</b> <span> {person.skin_color} </span>
            </Typography>
          
            <Typography >
            <b>Eye Color :</b>  <span> {person.eye_color} </span>
            </Typography>
                     
         </CardContent>

      </Card> 

     </div>
      
    ))}
    
   </div>
      {/* <Button className='shadow'>next</Button> */}
 
   </div>

   )
}

export default People;