import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button}  from '@material-ui/core';
import '../index.css'
import './StarWars.css'
import { Link } from 'react-router-dom';

function People(props){
   const { people } = props
   const {btn } = props

// console.log(btn);

   if(!people){
      return <div>Loading movie information...</div>;
   }

   // {btn.map(Link => (
   //    <div>
   //      return link
   //    </div>
   // ))}

   // function handle(){
   
   // }

   return(
   <div>
   <Typography className=' text-center fs-1 my-4'>PEOPLE</Typography>
   <div className='d-flex justify-content-between  flex-wrap container align-items-center mt-5 mb-5  '>

    {people.map( person => (
     <div>
       <Card className='card text-start shadow-lg card-color mb-3 card-effect  zindex' style={{width:22 +'rem'}}>
        <CardContent>
            <Typography className='fs-6 '>
               <b>Name :</b> <span>{person.next}</span> 
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
      <Button className='shadow'>next</Button>
 
   </div>

   )
}

export default People;