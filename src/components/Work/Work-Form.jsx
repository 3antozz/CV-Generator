export default function WorkForm ({workValues, workOpen, setWork, workChange, addWork, removeWork}) {
    return (
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