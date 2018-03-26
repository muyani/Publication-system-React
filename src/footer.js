import React ,{Component} from 'react';
import './footer.css';
import {Button,Grid,Menu} from 'semantic-ui-react';


class Footer extends React.Component{
    state={};
    handleItemClick=(e,{name})=>this.setState({activeItem:name});
    render(){
        const activeItem=this.state;
        return ( 
            <div className="footerDiv">
        <Menu fluid color="rgb(6, 6, 88)" inverted widths={8}>
            <Menu.Item name="facebook" icon="facebook" active= {activeItem==="facebook"} onClick={this.handleItemClick}/>
            <Menu.Item name="twitter" icon="twitter" active= {activeItem==="twitter"} onClick={this.handleItemClick}/>
            <Menu.Item name="instagram" icon="instagram" active= {activeItem==="instagram"} onClick={this.handleItemClick}/>
            <Menu.Item name="email" icon="mail" active= {activeItem==="email"} onClick={this.handleItemClick}/>
            <Menu.Item name="whatsapp" icon="whatsapp" active= {activeItem==="whatsapp"} onClick={this.handleItemClick}/>
            <Menu.Item name="skype" icon="skype" active= {activeItem==="skype"} onClick={this.handleItemClick}/>
            <i aria-hidden="true" className="inline icon"></i>
             <input type="text" placeholder="Receive our newsletter" />
             <Button type="submit">Submit Email</Button>

            </Menu>
            <Grid divided="vertically">
                <Grid.Row columns={3}>
                    <Grid.Column>
            <p className="footerText">This is the footer description</p>
            </Grid.Column>
            </Grid.Row>
            </Grid>
            </div>
        )
}
}
export default Footer;