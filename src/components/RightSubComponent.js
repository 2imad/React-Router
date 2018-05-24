import React, { Component } from 'react';
import { Link } from 'react-router-dom';


 const RightSubComponent = () => {
    return (
      <div className="row">
        <div  className='col m12'>
         <div className='card teal darken-1 hoverable center' >
          <div className='card-content white-text'>
           <span className='card-title'>Routing is Fun</span>
            <p>We Can add as many Routes as needed in a Single Page Application</p>
           </div>
          <div className='card-action' >
          <Link className="waves-effect waves-light btn" to="/">Back Home</Link>
         </div>
        </div>
       </div>
      </div>
    )
  }
  
export default RightSubComponent