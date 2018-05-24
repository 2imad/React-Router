import React from 'react';
import { Link } from 'react-router-dom';


const LeftSubComponent = () => {
    return (
      <div className="row">
        <div  className='col m12'>
         <div className='card cyan darken-1 hoverable center' >
          <div className='card-content white-text'>
           <span className='card-title'>React Router</span>
            <p>By using React Router , we can render sub-components on the main component  </p>
           </div>
          <div className='card-action' >
          <Link className="waves-effect waves-light btn" to="/">Back Home</Link>
         </div>
        </div>
       </div>
    </div>
  )
}
  
export default LeftSubComponent;