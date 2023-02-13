import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact';


const ContactCard = ({contact, remove, connected}) => {

    function contactConnected() {
        if(contact.connected){
            return <i onClick={ () => connected(contact) } className='bi-person-fill task-action' style={{color: 'green'} }></i>
        }else {
            return <i onClick={ () => connected(contact) } className='bi-person-fill task-action' style={{color: 'red'} }></i>
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <th>
                <span className='ms-2'>{ contact.lastName }</span>
            </th>
            <td>
                { contact.email }
            </td>
            <td style={{cursor: 'pointer'}}>
                { contactConnected() }
            </td>
            <td>
                <i onClick={ () => remove(contact) } className='bi-trash task-action' style={{color: 'tomato', cursor: 'pointer'} }></i>
            </td>
        </tr>
    );
};


ContactCard.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactCard;
