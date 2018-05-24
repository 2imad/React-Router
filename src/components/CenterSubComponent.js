import React from 'react';
import { Link } from 'react-router-dom';


const CenterSubComponent = () => {
  return (
      <div  className="row">
        <div  className='col m12'>
         <div className='card light-blue darken-1 hoverable center' >
          <div className='card-content white-text'>
           <span className='card-title'>React Router</span>
            <p>It makes it possible to toggle between components depending on events,the only difference seen is the text changing, in fact the whole Card is rendering from different Route, as can be seen on th adress bar   </p>
           </div>
          <div className='card-action' >
          <Link className="waves-effect waves-light btn" to="/">Back Home</Link>
         </div>
        </div>
       </div>
      </div>
    )
  }
  
export default CenterSubComponent