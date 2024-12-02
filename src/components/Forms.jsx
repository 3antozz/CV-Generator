import '../styles/Forms.css'

function Forms ({aboutValues, aboutChange, contactValues, contactChange, educationValues, educationChange, educationOpen, setEducation, addEducation, removeEducation, workValues, workOpen, setWork, workChange, addWork, removeWork}) {
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
                    {educationOpen && <button type="button" className='add' onClick={addEducation}>Add</button>}
                    <button type="button" className='open' onClick={setEducation}>{educationOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {educationOpen &&  
                <>
                    {educationValues.map((item) => <MajorForm key={item.id} item={item} onEdit={educationChange} onRemove={removeEducation} />)}          
                </>}
            </div>
            <div className='form-work form' action="">
                <div>
                    <h1>Work Experience</h1>
                    {workOpen && <button type="button" className='add' onClick={addWork}>Add</button>}
                    <button type="button" className='open' onClick={setWork}>{workOpen ? 'Submit' : 'Edit'}</button>
                </div>
                {workOpen &&  
                <>
                    {workValues.map((item) => <JobForm key={item.id} item={item} onEdit={workChange} onRemove={removeWork} />)}          
                </>}
            </div>
      </div>
      
    )
}

function MajorForm ({item, onEdit, onRemove}) {
    return (
        <form>
            <div>
                <h2>{item.major}</h2>
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? 'Submit' : 'Edit'}</button>
                <button className='delete' onClick={(event) => onRemove(event, item.id)}>Delete</button>
            </div>
            {item.isOpen && 
            <>
            <div className='field'>
                <label htmlFor="major">Major</label>
                <input type="text" id="major" value={item.major} onChange={(event) => onEdit(event, item.id, {major: event.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor="institution">Institution</label>
                <input type="text" id="institution" value={item.institution} onChange={(event) => onEdit(event, item.id, {institution: event.target.value})} />
            </div>   
            <div className='field'>
                <label htmlFor="startDate">Starting Date</label>
                <input type="month" id="startDate" value={item.startDate} onChange={(event) => onEdit(event, item.id, {startDate: event.target.value})} />
            </div> 
            <div className='field'>
                <label htmlFor="endDate">Ending Date</label>
                <input type="month" id="endDate" value={item.endDate} onChange={(event) => onEdit(event, item.id, {endDate: event.target.value})} />
            </div>  
        </>  
            }     
    </form>
    )
}

function JobForm ({item, onEdit, onRemove}) {
    return (
        <form>
            <div>
                <h2>{item.job}</h2>
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? 'Submit' : 'Edit'}</button>
                <button className='delete' onClick={(event) => onRemove(event, item.id)}>Delete</button>
            </div>
            {item.isOpen && 
            <>
            <div className='field'>
                <label htmlFor="job">Job Position</label>
                <input type="text" id="job" value={item.job} onChange={(event) => onEdit(event, item.id, {job: event.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" value={item.company} onChange={(event) => onEdit(event, item.id, {company: event.target.value})} />
            </div>   
            <div className='field'>
                <label htmlFor="startDate">Starting Date</label>
                <input type="month" id="startDate" value={item.startDate} onChange={(event) => onEdit(event, item.id, {startDate: event.target.value})} />
            </div> 
            <div className='field'>
                <label htmlFor="endDate">Ending Date</label>
                <input type="month" id="endDate" value={item.endDate} onChange={(event) => onEdit(event, item.id, {endDate: event.target.value})} />
            </div>  
        </>  
            }     
    </form>
    )
}



export default Forms



