import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/Title';
import LeftSubComponet from './components/LeftSubComponent';
import Header from './components/Header';
import CenterSubComponent from './components/CenterSubComponent';
import RightSubComponent from './components/RightSubComponent';


ReactDOM.render(
  <Router>
      <div>
         <Header/>
           <Route  path="/" component={Title} />
           <Route path="/left" component={LeftSubComponet} />
           <Route path="/center" component={CenterSubComponent} />
           <Route path="/right" component={RightSubComponent} />
      </div>
  </Router>,
  document.getElementById('root')
)