import '../styles/Forms.css'

function Forms ({aboutValues, aboutChange, contactValues, contactChange, educationValues, educationChange, educationOpen, setEducation}) {
    return (
        <div className="forms">
            <form className='form-about' action="">
                <div>
                    <h1>About Me</h1>
                    <button className='open' onClick={(event) => aboutChange(event, {isOpen: !aboutValues.isOpen})}>{aboutValues.isOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {aboutValues.isOpen &&  
                <>
                    <div className='field'>
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id="full-name" value={aboutValues.fullName} onChange={(event) => aboutChange(event, {fullName: event.target.value})} />
                    </div>
                    <div className='field'>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={aboutValues.profession} onChange={(event) => aboutChange(event, {profession: event.target.value})} />   
                    </div>  
                    <div className='field'>
                        <label htmlFor="description">Description</label>
                        <textarea id="description" value={aboutValues.description} onChange={(event) => aboutChange(event, {description: event.target.value})}></textarea>
                    </div>          
                </>}
            </form>
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
                        <label htmlFor="linkedin">Linkedin username</label>
                        <input type="text" id="linkedin" value={contactValues.linkedin} onChange={(event) => contactChange(event, {linkedin: event.target.value})}/>
                    </div>          
                </>}
            </form>
            <form className='form-education' action="">
                <div>
                    <h1>Education</h1>
                    <button type="button" className='open' onClick={setEducation}>{educationOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {educationOpen &&  
                <>
                    {educationValues.map((item) => <EducationForm key={item.id} item={item} onEdit={educationChange} />)}          
                </>}
            </form>
      </div>
      
    )
}

function EducationForm ({item, onEdit}) {
    return (
        <div>
            <div className='field'>
                <label htmlFor="major">Major</label>
                <input type="text" id="major" data-id={item.id} value={item.major} onChange={(event) => onEdit(event, event.target.dataset.id, {major: event.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" data-id={item.id} value={item.institution} onChange={(event) => onEdit(event, event.target.dataset.id, {institution: event.target.value})} />
            </div>   
            <div className='field'>
                <label htmlFor="startDate">Starting Date</label>
                <input type="date" id="startDate" data-id={item.id} value={item.startDate} onChange={(event) => onEdit(event, event.target.dataset.id, {startDate: event.target.value})} />
            </div> 
            <div className='field'>
                <label htmlFor="endtDate">Ending Date</label>
                <input type="date" id="endDate" data-id={item.id} value={item.endDate} onChange={(event) => onEdit(event, event.target.dataset.id, {endDate: event.target.value})} />
            </div>         
    </div>
    )
}



export default Forms