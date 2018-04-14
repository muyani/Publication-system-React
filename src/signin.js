import React ,{Component} from 'react';

import {Button,Form,Segment} from 'semantic-ui-react';

class Signin extends Component{
    constructor(props){
        super(props)
    }
    render(){
    return ( <Segment size="huge">
        <Form >
       
            <Form.Input label='user name' placeholder='username/email' />
            <Form.Input type='password' fluid label='password' placeholder='password' />
     
          <Button type='submit'>Log in</Button>
        </Form>
        </Segment>
     )  
    }

}
export default  Signin;
