import React from 'react';
import Header1 from './Header1';
import {Container} from 'semantic-ui-react';
import Footer from './footer';
import Homeview from './homeview';
import props from 'prop-types';
import {Redirect,Switch,BrowserRouter as Router,Route,Link} from 'react-router-dom';
import About from './about';
import Dashboard from './dashboard';
import Signup from './signup';
import Upload from './createPublication';
import './homepage.css'

class Homepage extends React.Component{
  //  state={visible:'true'};
   // hide=()=>setTimeout(this.setState({visible:'false'}),100);
    render(){
     const styles={
         minHeight:"800px"
     }
     
        return (  <Container className="minheight" >
           <Header1/>
    
           
                 <Switch>
                <Route exact path='/' component={Homeview}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/signup' component={Signup}></Route>
                <Route path='/upload' component={Upload}></Route>
                <Redirect to='/'/>
                </Switch>
              
              
           <Footer className="attached"/>
            </Container>
         
        )

        
    }
}
export default Homepage;