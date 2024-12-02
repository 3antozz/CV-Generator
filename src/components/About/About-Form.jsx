export default function AboutForm ({aboutValues, aboutChange}) {
    return (
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
    )
    
}