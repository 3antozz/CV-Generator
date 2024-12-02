import '../styles/Forms.css'

function Forms ({aboutValues, aboutChange, contactValues, contactChange, educationValues, educationChange, educationOpen, setEducation, workValues, workOpen, setWork, workChange}) {
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
            <div className='form-education form' action="">
                <div>
                    <h1>Education</h1>
                    <button type="button" className='open' onClick={setEducation}>{educationOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {educationOpen &&  
                <>
                    {educationValues.map((item) => <MajorForm key={item.id} item={item} onEdit={educationChange} />)}          
                </>}
            </div>
            <div className='form-work form' action="">
                <div>
                    <h1>Work Experience</h1>
                    <button type="button" className='open' onClick={setWork}>{workOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {workOpen &&  
                <>
                    {workValues.map((item) => <JobForm key={item.id} item={item} onEdit={workChange} />)}          
                </>}
            </div>
      </div>
      
    )
}

function MajorForm ({item, onEdit}) {
    return (
        <form>
            <div>
                <h2>{item.major}</h2>
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? 'Submit' : 'Edit'}</button>
            </div>
            {item.isOpen && 
            <>
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
                <input type="month" id="startDate" data-id={item.id} value={item.startDate} onChange={(event) => onEdit(event, event.target.dataset.id, {startDate: event.target.value})} />
            </div> 
            <div className='field'>
                <label htmlFor="endDate">Ending Date</label>
                <input type="month" id="endDate" data-id={item.id} value={item.endDate} onChange={(event) => onEdit(event, event.target.dataset.id, {endDate: event.target.value})} />
            </div>  
        </>  
            }     
    </form>
    )
}

function JobForm ({item, onEdit}) {
    return (
        <form>
            <div>
                <h2>{item.job}</h2>
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? 'Submit' : 'Edit'}</button>
            </div>
            {item.isOpen && 
            <>
            <div className='field'>
                <label htmlFor="job">Job Position</label>
                <input type="text" id="job" data-id={item.id} value={item.job} onChange={(event) => onEdit(event, event.target.dataset.id, {job: event.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" data-id={item.id} value={item.company} onChange={(event) => onEdit(event, event.target.dataset.id, {company: event.target.value})} />
            </div>   
            <div className='field'>
                <label htmlFor="startDate">Starting Date</label>
                <input type="month" id="startDate" data-id={item.id} value={item.startDate} onChange={(event) => onEdit(event, event.target.dataset.id, {startDate: event.target.value})} />
            </div> 
            <div className='field'>
                <label htmlFor="endDate">Ending Date</label>
                <input type="month" id="endDate" data-id={item.id} value={item.endDate} onChange={(event) => onEdit(event, event.target.dataset.id, {endDate: event.target.value})} />
            </div>  
        </>  
            }     
    </form>
    )
}



export default Forms