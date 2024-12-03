export default function AboutForm ({aboutValues, aboutChange}) {
    return (
        <form className='form-about form' action="">
            <div>
                <h1>Profile</h1>
                <button className='open' onClick={(event) => aboutChange(event, {isOpen: !aboutValues.isOpen})}>{aboutValues.isOpen ? <svg className="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>}</button>
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