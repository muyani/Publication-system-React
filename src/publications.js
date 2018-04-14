import React,{Component} from 'react';
import {Header,Item,Button} from 'semantic-ui-react';
import axios from 'axios';
import {} from 'react-router-dom';

const getUrl = 'http://localhost/publicationApi/documents';

class Publications extends React.Component{
  constructor(props){
    super(props)
    this.state={
      results:[]

    }
  }
  componentDidMount(){
 
    axios.get(getUrl).then((res)=>{
    const docs=res.data.result;
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
     <Item key={result.doc_id}>
     <Item.Image size='small' src={"/assets/images/"+result.doc_id +"/art.jpg"}/>
       <Item.Content>
         <Item.Header as='a'>{result.doc_title}</Item.Header>
         <Item.Description>
           <div>
             <Header sub>Abstract</Header>
           <span>{result.doc_description}</span>
           </div>
           <p>
             {result.doc_url}
            <br/>
             {result.doc_id}
             
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


