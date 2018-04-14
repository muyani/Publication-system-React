import React,{Component} from 'react';
import{Header,TextArea,Icon,Menu,Segment,Form} from 'semantic-ui-react';
import './createPublications.css';

class Upload extends React.Component{
 
    state = { activeItem: '' }
    
   handleItemClick = (e, { name }) => this.setState({ activeItem: name })


   
  
  renderSwitch(params){
    switch(params){
      case "title":
      return (
        
          <div>
        
          <p>Please note that a short and precise title is appealing to the reader</p>
         
         
          <TextArea autoHeight rows={1} className="fullwidth" placeholder ="A short and precise title is appealing to the reader " ></TextArea>
          <hr/>
          <p> this is how it will appear</p>
          <br/>
          <Segment textAlign="center" raised>
         <Header as="h1">Value</Header>
         </Segment>
      </div>
      )
      case "abstract":
      return (
        <div>
        <p>Please note that a short with atmost (300 words) and precise abstract  is appealing to the reader</p>
        <TextArea  rows={6} className="fullwidth" placeholder ="A short and precise abstract is appealing to the reader " ></TextArea>
        <p> this is how it will appear</p>
          <br/>
          <Segment textAlign="center" raised>
         <Header as="h5">Value</Header>
         </Segment>
</div>
      )
     
      

    }
  }
    render(){
        const { activeItem } = this.state
        return(
         
              <div>
                <Segment stacked className="minHeight" attached='top'>
                <Form fluid>
                <Header> 
          <Header.Content>
          Input your {this.state.activeItem} below
          </Header.Content>
          
          </Header>
                {this.renderSwitch(activeItem)}
                </Form>
                </Segment>
        
                <Menu attached='bottom' tabular>
                  <Menu.Item name='title' active={activeItem === 'title'} onClick={this.handleItemClick}>
                    Project Title
                  </Menu.Item>
        
                  <Menu.Item name='abstract' active={activeItem === 'abstract'} onClick={this.handleItemClick}>
                    Project Abstract
                  </Menu.Item>
        
                  <Menu.Item name='cover image' active={activeItem === 'cover image'} onClick={this.handleItemClick}>
                    Cover Image
                  </Menu.Item>
                  <Menu.Item name='word document' active={activeItem === 'word document'} onClick={this.handleItemClick}>
                    Editable Document
                  </Menu.Item>
                  <Menu.Item name='pdf document' active={activeItem === 'pdf document'} onClick={this.handleItemClick}>
                    PDF Document
                  </Menu.Item>
        
                  <Menu.Menu position='right'>
                    <Menu.Item name='new-tab' active={activeItem === 'new-tab'} onClick={this.handleItemClick}>
                      <Icon name='add' />
                      New Tab
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
              </div>
            )
          }
        
        }


export default Upload;