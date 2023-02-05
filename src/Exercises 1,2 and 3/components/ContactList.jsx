import React from 'react';
import { Contact } from '../models/classes/Contact';
import ContactCard from './ContactCard';


const ContactList = () => {

    const defaultContact = new Contact('Juan', 'Perez', 'juan.perez@react.com', true)

    const changeState = (id) => {
        console.log('cambia')
    }

    return (
        <div>
        <div>
            <h1>Your contact:</h1>
        </div>
        {/* TODO: Aplicar un for/map para renderizar una lista*/}
        <ContactCard contact={defaultContact}/>
    </div>
    );
};


export default ContactList;
