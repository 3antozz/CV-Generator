export default function ContactForm ({contactValues, contactChange}) {
    return (
        <form className='form-contact form' action="">
            <div>
                <h1>Contact</h1>
                <button className='open' onClick={(event) => contactChange(event, {isOpen: !contactValues.isOpen})}>{contactValues.isOpen ? <svg className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>}</button>
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