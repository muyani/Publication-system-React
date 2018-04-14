import React,{Component} from 'react';
import {Container,Segment,Button,Form} from 'semantic-ui-react';


class Signup extends Component{
  state={loading:true}
    render(){
      const loading=this.state;
        return (
          
   <Segment attached textAlign="center" circular compact  >
        <Form  widths='equal'>
          
            <Form.Input label='First Name' placeholder='First Name' />
            <Form.Input label='Last Name' placeholder='Last  Name' />
            <Form.Input label='Email address' placeholder='Email Address' />
            <Form.Input label='Student Reg number' placeholder='Reg-No' />
            <Form.Input label='Telephone' placeholder='Phone Number' />

            
            <Form.Input type='password' label='password' placeholder='password' />
            <Form.Input type='password' label='confirm password' placeholder='confirm password' />
        
          <Button type='submit'>Submit Details</Button>
        </Form>
   </Segment>
 
      )

    }

}
export default Signup;