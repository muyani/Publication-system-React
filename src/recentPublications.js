import React,{component} from 'react';
import {Segment,Menu,Card,Grid,Feed} from 'semantic-ui-react';



class RecentPublications extends React.Component{
   
    state={activeItem:"Recent Publications"}
    handleItemClick=(e,{name})=>this.setState({activeItem:name});
    
render(){
    const {activeItem}=this.state;
    const items=[{header:"Project-April",meta:"34%",description:"A project to determine the soil Ph in the Rift Valley soil"},
    {header:"project-May",meta:"56%",description:"A project to study deforestation in the Mau"}]
   

    return <Grid stretched fluid >
        <Grid.Column  width={4}>
        <Menu fluid vertical tabular>
        <Menu.Item name='Recent Publications' icon="book" active={activeItem === 'Recent Publications'} onClick={this.handleItemClick} />
        <Menu.Item name='My Publications' icon="write" active={activeItem === 'My Publications'} onClick={this.handleItemClick} />
        <Menu.Item name='My Reviewers' icon="call" active={activeItem === 'My Reviewers'} onClick={this.handleItemClick} />
        <Menu.Item name='My Reviewees' icon="student" active={activeItem === 'My Reviewees'} onClick={this.handleItemClick} />

            </Menu>
        </Grid.Column>
      
        
         <Grid.Column stretched width={12}>
             <Segment  >
    
             <Card fluid>
        <Card.Content>
          <Card.Header >
        Recently Published
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              The most famous man in the world 
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              The wildest places to be in the world
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              I will never forgive Satan
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
  <Card.Group itemsPerRow={2} items={items}/>
    </Segment>
    </Grid.Column>
    </Grid>
}
}



export default RecentPublications;