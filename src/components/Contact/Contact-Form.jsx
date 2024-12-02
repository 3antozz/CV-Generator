export default function ContactForm ({contactValues, contactChange}) {
    return (
        <form className='form-contact' action="">
            <div>
                <h1>Contact</h1>
                <button className='open' onClick={(event) => contactChange(event, {isOpen: !contactValues.isOpen})}>{contactValues.isOpen ? 'Submit' : 'Edit'}</button>
            </div>
            {contactValues.isOpen &&  
            <>
                <div className='field'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" value={contactValues.phone} onChange={(event) => contactChange(event, {phone: event.target.value})} />
                </div>
                <div className='field'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={contactValues.email} onChange={(event) => contactChange(event, {email: event.target.value})} />   
                </div>
                <div className='field'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" value={contactValues.address} onChange={(event) => contactChange(event, {address: event.target.value})}/>
                </div>   
                <div className='field'>
                    <label htmlFor="linkedin">Linkedin username</label>
                    <input type="text" id="linkedin" value={contactValues.linkedin} onChange={(event) => contactChange(event, {linkedin: event.target.value})}/>
                </div>          
            </>}
    </form>
    )
}