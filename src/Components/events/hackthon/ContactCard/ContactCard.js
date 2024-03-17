import React from 'react'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import './ContctCard.css'

function ContactCard() {
  return (
    <div className='endCard'>
        <h4>
            மேலதிக விபரங்கள்
        </h4>
        <div>
            <MailIcon className='contact'/>
            testinghackthon@gmail.com
        </div>
        <div>
            <PhoneIcon className='contact'/>
            077 123 4567
        </div>
        
    </div>
  )
}

export default ContactCard