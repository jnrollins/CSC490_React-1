import React from 'react'
import Fade from './Fade'
import { Tabs, Tab, Form, ControlLabel,
         FormGroup, FormControl, Col, Button } from 'react-bootstrap'
import { displayHome } from '../actions/display_actions'
import { createUser } from '../actions/user_actions'
import { createOrg } from '../actions/org_actions'

const Register = (props) => {
  const handleSubmit = (userType) => {
    let inputArr = [],
        inputObj = {},
        inputs = document.getElementsByClassName('form-control')
    for(let i=0; i<inputs.length; i++){
      inputs[i].value ? inputArr.push(inputs[i].value) : null
    }
    if(userType == 'user' && inputArr.length == 6){
      [ inputObj.firstName,
        inputObj.lastName,
        inputObj.zipCode,
        inputObj.email,
        inputObj.pwHash ] = [...inputArr]

        //testing -- remove
        console.log('registering user with info:', inputObj)

      createUser(inputObj)
      //function here to display modal, call displayHome() when closing that modal
      //information about next steps, check your email, etc
      displayHome()
    } else if( userType == 'org' && inputArr.length == 12){

        inputObj = {
          orgName: inputArr[0],
          orgEmail: inputArr[1],
          orgPwHash: inputArr[2],
          orgAddress: {
            street: inputArr[4],
            city: inputArr[5],
            state: inputArr[6],
            zip: inputArr[7]
          },
          orgDescription: inputArr[8],
          orgPhone: inputArr[9],
          orgWebsite: inputArr[10],
          orgContactPerson: inputArr[11]
        };

      //testing -- remove
      console.log('sending org registration request info:', inputObj)

        createOrg(inputObj)
      //function here to display modal, call displayHome() when closing that modal
      //information about next steps, check your email, etc
      displayHome()
    } else {
      console.log('enter values in all fields!')
    }
  }

  return(
    <Fade>
      <div id='register-view' className='view-container'>
        <div id='onsite'>
          <Tabs defaultActiveKey={1} id='registration-tabs'>
            {/*user fields*/}
            <Tab eventKey={1} title='User' >
              <Form horizontal onSubmit={(e)=>{e.preventDefault();handleSubmit('user')}} >
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={4}>
                    First Name:
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='First Name...'></FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} sm={4}>
                    Last Name:
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='Last Name...'></FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} sm={4}>
                    ZIP Code:
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='zip/postal code'></FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} sm={4}>
                    E-mail:
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='email@example.com'></FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} sm={4}>
                    Password:
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='Password'></FormControl>
                  </Col>
                  <Col componentClass={ControlLabel} sm={4}>
                    Confirm Password
                  </Col>
                  <Col sm={8}>
                    <FormControl placeholder='Password'></FormControl>
                  </Col>
                </FormGroup>
                <Button type='submit' bsStyle='primary'>Submit</Button>
              </Form>
            </Tab>
            {/*org fields*/}
            <Tab eventKey={2} title='Organization'>
            <Form onSubmit={(e)=>{e.preventDefault();handleSubmit('org')}}>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              Name:
            </Col>
            <Col sm={8}>
              <FormControl placeholder='Organization Name'></FormControl>
            </Col>
            <Col componentClass={ControlLabel} sm={4}>
              E-mail:
            </Col>
            <Col sm={8}>
              <FormControl placeholder='email@example.com'></FormControl>
            </Col>
            <Col componentClass={ControlLabel} sm={4}>
              Password:
            </Col>
            <Col sm={8}>
              <FormControl placeholder='Password'></FormControl>
            </Col>
            <Col componentClass={ControlLabel} sm={4}>
              Confirm Password
            </Col>
            <Col sm={8}>
              <FormControl placeholder='Password'></FormControl>
            </Col>
            <Col componentClass={ControlLabel} sm={4}>
              Street:
            </Col>
            <Col sm={8}>
              <FormControl placeholder='Street Address'></FormControl>
            </Col>
              <Col componentClass={ControlLabel} sm={4}>
                City:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='City'></FormControl>
              </Col>
              <Col componentClass={ControlLabel} sm={4}>
                State:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='State'></FormControl>
              </Col>
              <Col componentClass={ControlLabel} sm={4}>
                Zip:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='12345'></FormControl>
              </Col>
            <FormGroup controlId="formControlsTextarea">
              <Col sm={4}>
                <ControlLabel>Organization Description</ControlLabel>
              </Col>
              <Col sm={8}>
                <FormControl componentClass="textarea" placeholder="..." />
              </Col>
              <Col componentClass={ControlLabel} sm={4}>
                Phone:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='(123) 555-6789'></FormControl>
              </Col>
              <Col componentClass={ControlLabel} sm={4}>
                Website:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='www.yourwebsite.com'></FormControl>
              </Col>
              <Col componentClass={ControlLabel} sm={4}>
                Contact Name:
              </Col>
              <Col sm={8}>
                <FormControl placeholder='Joe Helpful'></FormControl>
              </Col>
            </FormGroup>
            <Button type='submit' bsStyle='primary'>Submit</Button>
            </FormGroup>

            </Form>
            </Tab>
          </Tabs>
        </div>
        <div id='offsite'>
          offsite registration
        </div>
      </div>
    </Fade>
  )
}

export default Register