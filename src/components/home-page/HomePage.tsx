import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EditContact from './EditContact';

import api from '../../api';


type Props = {};

const HomePage = (props: Props) => {

  const [contactsTable, setContactsTable] = useState<any[]>([]);
  const [visibility, setVisibility] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const [index, setIndex] = useState(0);
//to re render page after updating or deleting
  const [updatedItem, setUpdatedItem] = useState();
  const [deletedItem, setDeletedItem] = useState();

 //getting data using axios
  const getContacts = async ()=>{
    const {data} = await api.get('/contact');
    return data;
  }
  //useEffect hook is used to call getContacts function
  useEffect( ()=>{
    getContacts().then( (res:any)=>{
      setContactsTable(res);
    } ).catch( (error:any)=>{
      console.log(error);
    } )
  },[updatedItem] );
  useEffect( ()=>{
    getContacts().then( (res:any)=>{
      setContactsTable(res);
    } ).catch( (error:any)=>{
      console.log(error);
    } )
  },[deletedItem] );


  const contactHandler = async (contact: any)=>{

    // creating data in the json server 
    const request = contact;
    const response =  await api.post('/contact', request )
    .then( (res:any)=>{ setContactsTable([...contactsTable, res.data]) } )
    .catch( (error:any)=>{console.log(error)} )

    return response;
  };


  

  const deleteContact = async (contact:any)=>{
    await api.delete(`/contact/${contact.id}`).then(
      (response:any)=>setDeletedItem(response)
    ).catch((err:any)=>console.log(err));
  };




  const editContactBtn = (contact:any, index:number)=>{
    setVisibility(true);
    setSelectedContact(contact);

    //extracting index when edit button is clicked, to be used in updateContact funtion
    setIndex(contact.id);
  }
  


  const updateContact = async (con:any) =>{
    let updatedItem = con;

    await api.put(`/contact/${index}`, updatedItem).then(
      (response:any)=>setUpdatedItem(response)
    ).catch((err:any)=>console.log(err));

    setVisibility(false);
  }



  return (
      <>
       { visibility? (<EditContact setVisibility={ setVisibility } selectedContact={selectedContact} updateContact = {updateContact}  />) : null }
        <ContactForm contactHandler = { contactHandler } />
        <ContactList contactsTable = { contactsTable } deleteContact={ deleteContact } editContactBtn={ editContactBtn } />
      </>
  );
};

export default HomePage;
