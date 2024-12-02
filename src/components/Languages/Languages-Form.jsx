export default function LanguagesForm ({languagesValues, languagesOpen, setLanguages, languagesChange, addLanguages, removeLanguages}) {
    return (
        <div className='form-languages form' action="">
            <div>
                <h1>Languages</h1>
                {languagesOpen && <button type="button" className='add' onClick={addLanguages}>Add</button>}
                <button type="button" className='open' onClick={setLanguages}>{languagesOpen ? 'Submit' : 'Edit'}</button>
            </div>
            {languagesOpen &&  
            <>
                {languagesValues.map((item) => <LanguageForm key={item.id} item={item} onEdit={languagesChange} onRemove={removeLanguages} />)}          
            </>}
    </div>
    )
}

function LanguageForm ({item, onEdit, onRemove}) {
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
                <label htmlFor="language">Language</label>
                <input type="text" id="language" value={item.name} onChange={(event) => onEdit(event, item.id, {name: event.target.value})} />
            </div>
            <div className='field'>
                <label htmlFor="level">Level</label>
                <input type="text" id="level" value={item.level} onChange={(event) => onEdit(event, item.id, {level: event.target.value})} />
            </div>
        </>  
            }     
    </form>
    )
}