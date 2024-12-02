import '../styles/Education.css'

function Education ({values}) {
    return (
        <div className='education'>
            <h2>Education</h2>
            <ul>
                {values.map((item) => <Major key={item.id} item={item} />)}
            </ul>
        </div>
    )
}

function convertDateToYear (date) {
    return new Date(date).getFullYear();
}



function Major ({item}) {
    return (
        <li>
            <h3>{item.major}</h3>
            <p>{item.institution}</p>
            <p>({convertDateToYear(item.startDate)} - {convertDateToYear(item.endDate)})</p>
        </li>
    )
}

export default Education
