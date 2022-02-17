import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type Props = {
    contactHandler : (contact: object) => void,
};

const ContactForm = (props: Props) => {

    const [fName,setFname] = useState("");
    const [lName,setLname] = useState("");
    const [number,setNumber] = useState(0);

    
    // gets called when submit button is clicked
    const addEntry = (e:any) =>{
    e.preventDefault();
    props.contactHandler({fName, lName, number});
  };



  return (
  <Container className='mt-3'>
      <form onSubmit={ addEntry }>

        <Row>
            <Col>
            <div><label>First Name</label></div>
            <Form.Control type="text" placeholder="First name"   onChange={ e=>setFname(e.target.value) } />
            </Col>
        </Row>
        <Row>
            <Col>
            <div><label>Last Name</label></div>
            <Form.Control type="text" placeholder="Last name"  onChange={ e=>setLname(e.target.value) } />
            </Col>
        </Row>
        <Row>
            <Col>
            <div><label>Number</label></div>
            <Form.Control type="text" placeholder="number"  onChange={ e=>setNumber(parseInt(e.target.value)) } />
            </Col>
        </Row>
        <Row>
            <Col>
            <Button className='mt-3' variant="primary" type="submit">Add</Button>
            </Col>
        </Row>
      </form>
</Container>
  
  );
};

export default ContactForm;
