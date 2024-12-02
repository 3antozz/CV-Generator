export default function EducationForm ({educationOpen, addEducation, educationValues, removeEducation, setEducation, educationChange}) {
    return (
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