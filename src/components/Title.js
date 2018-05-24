import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
 return (
      <div className="title center">
        <h1>Demo Router</h1>
        <div className='center' >
          <Link style={{marginRight:'2em'}} className="waves-effect waves-light btn" to="/left">Show first Sub component</Link>
          <Link className="waves-effect waves-light btn" to="/center">Show second component</Link>
          <Link style={{marginLeft:'2em'}} className="waves-effect waves-light btn" to="/right">Show Third component</Link>
        </div>
    </div>      
   )
}

export default Title