import { Typography } from '@material-ui/core';
import React from 'react'
import '../index.css'
function Home(){

    return(
        <div>

            <div className='App'>
            
            </div>

            <div className='container'>
            <Typography>Documentation</Typography>
               <Typography>Introduction  </Typography>   
               <Typography> Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with the resources available and how to consume them with HTTP requests. If you're after a native helper library then I suggest you scroll down and check out what's available. Read through the getting started section before you dive in. Most of your problems should be solved just by reading through it.
            </Typography>

            <Typography> Getting started</Typography>   
             <Typography>
             Let's make our first API request to the Star Wars API!

                Open up a terminal and use curl or httpie to make an API request for a resource. In the example below, we're trying to get the first planet, Tatooine: 
                </Typography>   

               <Typography>http swapi.dev/api/planets/1/ </Typography> 
               <Typography>
               We'll use httpie for our examples as it displays responses nicely and gives us a whole lot more useful information. If you don't want to download httpie, just use the curl command instead.

                Here is the response we get:
               </Typography>
               
            </div>
        </div>
     
    )
}

export default Home;