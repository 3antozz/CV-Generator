export default function SkillsForm ({skillsValues, skillsOpen, setSkills, skillsChange, addSkills, removeSkills}) {
    return (
        <div className='form-skills form' action="">
            <div>
                <h1>Skills Summary</h1>
                {skillsOpen && <button type="button" className='add' onClick={addSkills}>Add</button>}
                <button type="button" className='open' onClick={setSkills}>{skillsOpen ? 'Submit' : 'Edit'}</button>
            </div>
            {skillsOpen &&  
            <>
                {skillsValues.map((item) => <SkillForm key={item.id} item={item} onEdit={skillsChange} onRemove={removeSkills} />)}          
            </>}
    </div>
    )
}

function SkillForm ({item, onEdit, onRemove}) {
    return (
        <form>
            <div>
                <h2>{item.name}</h2>
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? 'Submit' : 'Edit'}</button>
                <button className='delete' onClick={(event) => onRemove(event, item.id)}>Delete</button>
            </div>
            {item.isOpen && 
            <>
            <div className='field'>
                <label htmlFor="skill">What's your skill?</label>
                <input type="text" id="skill" value={item.name} onChange={(event) => onEdit(event, item.id, {name: event.target.value})} />
            </div>
        </>  
            }     
    </form>
    )
}