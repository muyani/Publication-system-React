import React, { Component } from 'react'
import { Dropdown,Popup,Sticky, Input, Menu } from 'semantic-ui-react';
import Signin from './signin';
import axios from 'axios';
import {Route,Link} from 'react-router-dom';
import './Header1.css';



const getCategoriesUrl='http://localhost/publicationApi/categories';

class Header1 extends Component {
  state = { activeItem: 'Home',
          button:'login',options:[]
}
componentDidMount(){
  axios.get(getCategoriesUrl).then((res)=>{
   const options=res.data.result;
   this.setState({options:options})

  })

}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  render() {
    const { activeItem,button,options } = this.state;
    //console.log(this.state.options )
    const categories=this.state.options.map((option)=>{return {key:option.category_id,text:option.category_name,value:option.category_name}});
     //console.log(categories);
    return (
    
    
      <Menu stackable color="teal" pointing attached='top' >
     
    
        <Menu compact>
            <Dropdown className="zIndex" text="Publications" selection options={categories} simple item>
        
                </Dropdown>
                </Menu>
       <Link to='/about'> <Menu.Item name='About us' active={activeItem === 'About'} onClick={this.handleItemClick} /></Link>
     <Link to="/contact"> <Menu.Item name='Contact Us' active={activeItem === 'Contact'} onClick={this.handleItemClick} /></Link>
     <Link to="/upload"> <Menu.Item name='Create Publication' active={activeItem === 'upload'} onClick={this.handleItemClick} /></Link>
     <Link to="/dashboard"> <Menu.Item name='Dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} /></Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Popup  trigger={<Menu.Item name={button} active={activeItem === {button}} onClick={this.handleItemClick} />} hoverable ><Signin/></Popup>
          <Link to='/signup'><Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} /></Link>
        </Menu.Menu>
      </Menu>
   
     
    )
  }
}

export default Header1;






