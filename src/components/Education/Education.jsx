import '../../styles/Education.css'

function Education ({values}) {
    return (
        <div className='education section'>
            <h2 className='title'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school</title><path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" /></svg>Education</h2>
            <ul>
                {values.map((item) => <Major key={item.id} item={item} />)}
            </ul>
        </div>
    )
}

function convertDateToYear (date) {
    return date === 'Present' ? date : new Date(date).getFullYear();
}



function Major ({item}) {
    return (
        <li>
            <h3>{item.major}</h3>
            <h4>{item.institution} | ({convertDateToYear(item.startDate)} - {convertDateToYear(item.endDate)})</h4>
        </li>
    )
}

export default Education
