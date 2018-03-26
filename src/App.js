import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Header1 from './Header1.js';
import Footer from './footer.js';
import Recentpublications from './recentPublications';
import Mypublications from './myPublications';
import {Container,Sticky} from 'semantic-ui-react';
import Dashboard from './dashboard';
import Homepage from './homepage';
class App extends React.Component{
  
  render(){
    return ( <Container>
<Homepage/>

 </Container>
    )        
          
  }
}
 
export default App;