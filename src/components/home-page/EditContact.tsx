import React ,{ useState }  from 'react';
import { Button, Card, CloseButton, Form } from 'react-bootstrap';

type Props = {
    setVisibility : (val: boolean) =>void,
    selectedContact : any,
    updateContact : (con:any) =>void,
};

const EditContact = (props: Props) => {

    const { setVisibility, selectedContact, updateContact } = props;
    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [number, setNumber] = useState(0);

  return (
  <>
  <div className='popup'>

    <Card className='popup-inner'>
        <Card.Header as="h5">Edit
        <CloseButton onClick={ () => setVisibility(false) } className='popup-close-button' />
        </Card.Header>
        <Card.Body>
        <Form>
            
            <label>First name</label>
            <Form.Control className='mb-2' type="text" placeholder={selectedContact.fName} onChange={ e=>setFname(e.target.value) } />
            <label>Last name</label>
            <Form.Control className='mb-2' type="text" placeholder={selectedContact.lName} onChange={ e=>setLname(e.target.value) } />
            <label>Number</label>
            <Form.Control className='mb-2' type="number" placeholder={selectedContact.number} onChange={ e=>setNumber(parseInt(e.target.value)) } />
        

            </Form>
            <Button onClick={ ()=>updateContact({ fName, lName, number }) } variant="primary">Update</Button>
        </Card.Body>
    </Card>
  </div>
  </>
    );
};


export default EditContact;