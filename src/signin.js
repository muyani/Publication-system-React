import {React,Component} from 'react';
import {Router} from 'react-router';
import {Button,Form,Segment} from 'semantic-ui-react';

class Signin extends React.Component{
    render(){
    return  ( <Segment>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='user name' placeholder='username/email' />
            <Form.Input type='password' fluid label='password' placeholder='password' />
          </Form.Group>
          <Button type='submit'>Log in</Button>
        </Form>
      </Segment>)  
    }
}
export default  Signin;
