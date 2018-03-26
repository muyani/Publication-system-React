import React from 'react';
import Header1 from './Header1';
import {Container} from 'semantic-ui-react';
import Footer from './footer';
import Homeview from './homeview';
import props from 'prop-types';

class Homepage extends React.Component{
    state={visible:'true'};
    hide=()=>setTimeout(this.setState({visible:'false'}),100);
    render(){
        const visible=this.state;
        return ( <Container fluid>
            <Header1></Header1>
            <Homeview className="homeview"></Homeview>
            <Footer/>
            </Container>
        )

        
    }
}
export default Homepage;