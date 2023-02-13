import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact';

const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const lastName = useRef('');
    const email = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastName.current.value,
            email.current.value,
            false
        );

        add(newContact);
    }

    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <input ref={ nameRef } id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name' />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <input ref={ lastName } id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='Last name' />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <input ref={ email } id='inputemail' type='email' className='form-control form-control-lg' required placeholder='Email' />
                        </div>
                    </div>
                    <div className="row">
                        <div className='col'>
                            <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
