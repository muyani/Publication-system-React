import React,{Component} from 'react';
import {Item,Button} from 'semantic-ui-react';
import axios from 'axios';

const url = 'http://localhost/publicationApi/users';

class Publications extends React.Component{
  constructor(props){
    super(props)
    this.state={
      results:[]
      
    }
  }
  componentDidMount(){
    axios.get(url).then((res)=>{
    const docs=res.data.result;
    console.log(docs.map((doc)=>{return doc.firstname}));
    this.setState(
      {results:docs}
    );
    })
  }
    render() {
        return (
        <Item.Group>
        {this.state.results.map((result)=> {
          return (    
     <Item>
       <Item.Image size='small' src="/assets/images/art.jpg"/>
       <Item.Content>
         <Item.Header as='a'>{result.username}</Item.Header>
         <Item.Description>
           <p>{result.firstname}</p>
           <p>
             {result.lastname}
           </p>
           <Button>Download PDF</Button>
         </Item.Description>
       </Item.Content>
     </Item>
          )
        }
        )
        }
        </Item.Group>
        )
        
    }
}

export default Publications;


