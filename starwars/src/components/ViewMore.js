import React from 'react'
import { Typography } from '@material-ui/core'; 

function ViewMore(props){
   
    const {view } =props
    console.log(view);
    return(
        <div>
                 <Typography className='p-4 '>{view.opening_crawl}</Typography>
        </div>
    )
}


export default ViewMore;