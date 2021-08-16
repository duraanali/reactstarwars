import { Typography } from '@material-ui/core';
import React from 'react'
import '../index.css'
function Home(){

    return(
        <div>

            <div className='App'>
            
            </div>

            <div className='info'>
            <div  className='container '>
            <Typography className='fs-2 my-4'>Documentation</Typography>
               <Typography className='fs-3 mb-3'>Introduction  </Typography>

               <Typography className='mb-3'> Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests. If you're after a native helper library then I suggest you scroll down and check out what's available. Read through the getting started section before you dive in. Most of your problems should be solved just by reading through it.
            </Typography>

            <Typography className='fs-3 mb-3'> Getting started</Typography>   
             <Typography>
             Let's make our first API request to the Star Wars API!

                Open up a terminal and use curl or httpie to make an API request for a resource. In the example below, we're trying to get the first planet, Tatooine: 
                </Typography>   

               <Typography className='my-3  shadow fs-5'>http swapi.dev/api/planets/1/ </Typography> 

               <Typography>
               We'll use httpie for our examples as it displays responses nicely and gives us a whole lot more useful information. If you don't want to download httpie, just use the curl command instead.

                Here is the response we get:
               </Typography>
               
            </div>
            </div>
        </div>
     
    )
}

export default Home;