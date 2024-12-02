import '../../styles/Work.css'

function Work ({values}) {
    return (
        <div className='work'>
            <h2>Work Experience</h2>
            <ul>
                {values.map((item) => <Job key={item.id} item={item} />)}
            </ul>
        </div>
    )
}

function convertDateToYear (date) {
    return new Date(date).getFullYear();
}



function Job ({item}) {
    return (
        <li>
            <h3>{item.job}</h3>
            <p>{item.company}</p>
            <p>({convertDateToYear(item.startDate)} - {convertDateToYear(item.endDate)})</p>
        </li>
    )
}

export default Work
