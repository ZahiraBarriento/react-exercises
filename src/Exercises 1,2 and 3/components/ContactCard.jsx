import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/classes/Contact';


const ContactCard = ({contact}) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                Last name: { contact.lastName }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Connected: { contact.connected ? 'Online' : 'Offline' }
            </h5>
        </div>
    );
};


ContactCard.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactCard;
