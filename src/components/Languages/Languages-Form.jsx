export default function LanguagesForm ({languagesValues, languagesOpen, setLanguages, languagesChange, addLanguages, removeLanguages}) {
    return (
        <div className='form-languages form' action="">
            <div>
                <h1>Languages</h1>
                {languagesOpen && <button type="button" className='add' onClick={addLanguages}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></button>}
                <button type="button" className='open' onClick={setLanguages}>{languagesOpen ? <svg className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>}</button>
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
                <button className='open' onClick={(event) => onEdit(event, item.id, {isOpen: !item.isOpen})}>{item.isOpen ? <svg className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>}</button>
                <button className='delete' onClick={(event) => onRemove(event, item.id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg></button>
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