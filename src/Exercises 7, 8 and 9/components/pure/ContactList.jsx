import React, { useState } from 'react';
import { Contact } from '../../models/Contact';
import ContactForm from '../forms/ContactForm';
import ContactCard from './ContactCard';


const ContactList = () => {

    const defaultContact1 = new Contact('Juan', 'Perez', 'juan.perez@ejemplo.com', true);
    const defaultContact2 = new Contact('Maria', 'Lopez', 'maria.lopez@ejemplo.com', false);
    const defaultContact3 = new Contact('Carlos', 'Gimenez', 'carlos.gimenez@ejemplo.com', true);

    const [contacts, setContact] = useState([defaultContact1, defaultContact2, defaultContact3]);

    function addContact(contact){
        console.log('Add this contact:', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact)
        setContact(tempContacts);
    }

    function deleteContact(contact){
        console.log('Delete this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContact(tempContacts);
    }

    function connectedContact(contact) {
        console.log('Connected this contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;

        setContact(tempContacts);
    }

    return (
    <div>
        <div className="container">
            <div className="row">
                <div className='col'>
                    <div className='card'>
                        <div className='card-header p-3'>
                            <h5>Your contacts:</h5>
                        </div>
                        <div className='card-body' data-mdb-perfect-scrolbar='true' style={ {position: 'relative', height: '400px'} }>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Last Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Connected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { contacts.map((contact, index) => {
                                        return (
                                            <ContactCard 
                                                key={ index } 
                                                contact={ contact }
                                                remove={ deleteContact }
                                                connected={ connectedContact }
                                            />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card'>
                    <div className='card-header p-3'>
                            <h5>Add contact:</h5>
                        </div>
                        <div className='card-body' data-mdb-perfect-scrolbar='true' style={ {position: 'relative', height: '400px'} }>
                            <ContactForm add={ addContact } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export default ContactList;
