import React from 'react'
import { Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';
import '../index.css'
function Home(){

    return(
        <div>
            <div className="d-flex shadow">
            <div  className='col-9'>
            <Typography className="my-4 fs-2 ms-5" >React Wars</Typography>
            </div>

            <nav className='col-3 d-flex my-4 fs-5'>
                 <Link to='/' className='nav-link'>Home</Link>
                 <Link to='/People' className='nav-link'>People</Link>
                 <Link to='/Film'className='nav-link'>Film</Link>
                
            </nav>
 
            </div>

            <div className='App'>
            
            </div>
        </div>
     
    )
}

export default Home;