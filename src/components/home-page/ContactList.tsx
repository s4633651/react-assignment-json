import React from 'react';
import { Container, Table } from 'react-bootstrap';

type Props = {
  contactsTable : any[],
  deleteContact : (contact:any) => Promise<void>,
  editContactBtn : (contact:any, index:number)=>void
};

const ContactList = (props: Props) => {

  const {contactsTable, deleteContact, editContactBtn } = props;

  
  const tableHeader = (
  <>
      <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Number</th>
      <th>Actions</th>
    </tr>
  </>
  );

  const tableBody = (
  <>

    { 
      contactsTable.map( (contact:any, index: number) => (
      <tr key={index} >
        <td>{ contact.fName }</td>
        <td>{ contact.lName }</td>
        <td>{ contact.number }</td>
        <td>
          <button onClick={ ()=>editContactBtn(contact,index) } className="btn-warning btn-sm me-2">Edit</button>
          <button onClick={ ()=>deleteContact(contact) } className="btn-danger btn-sm">Delete</button>
        </td>
      </tr>
      ) )


    }

  </>
  );

  return (
  <Container className='mt-3'>
    <Table striped bordered hover>
        <thead>
            { tableHeader }
        </thead>
        <tbody>
            { tableBody }
        </tbody>


    </Table>
  </Container>
  );
};

export default ContactList;