import React, { Component } from 'react'
import {Grid,Container,Sidebar,List, Segment,Header, Button, Menu, Image, Icon, } from 'semantic-ui-react'
import './dashboard.css';
import Header1 from './Header1';
import Footer from './footer';

class Dashboard extends Component {
  state = [{ visible: true,activeItem:'' }]

  toggleVisibility = () => this.setState({ visible: !this.state.visible });
  handleItemClick =(e,{name})=> this.setState({activeItem:name});

  render() {
    const { visible,activeItem } = this.state
    return (
        <Container>
        <Header1/>
        <br/>
        
      <div>
          
        <Button onClick={this.toggleVisibility}>Menu</Button>
        <br/>
        <br/>
        <Grid divided='vertically'>
              <Grid.Row columns={2}>
                  <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide out' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item active={activeItem==='Publications'} onClick={this.handleItemClick} name='Publications'>
              <Icon name='book' />
              Editorials
            </Menu.Item>
            <Menu.Item active={activeItem==='Reviews'} onClick={this.handleItemClick} name='Reviews'>
              <Icon name='write' />
              My Students
            </Menu.Item>
            
          </Sidebar>
          <Sidebar.Pusher>
            <Segment className="minHeight" raised>
            <List relaxed>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
        <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
      </List.Content>
    </List.Item>
  </List>
            </Segment>
            
          </Sidebar.Pusher>
          
        </Sidebar.Pushable>
        </Grid.Column>
        <Grid.Column>
        <Segment className="minHeight" raised>
            <List relaxed>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header as='a'>Daniel Louise</List.Header>
        <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/stevie.jpg' />
      <List.Content>
        <List.Header as='a'>Stevie Feliciano</List.Header>
        <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/assets/images/avatar/small/elliot.jpg' />
      <List.Content>
        <List.Header as='a'>Elliot Fu</List.Header>
        <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
      </List.Content>
    </List.Item>
  </List>
            </Segment>
            </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
      <Footer />
      </Container>
    )
  }
}

export default Dashboard;