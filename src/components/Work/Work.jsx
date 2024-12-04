import '../../styles/Work.css'

function Work ({values}) {
    return (
        <div className='work section'>
            <h2 className='title'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>briefcase-variant</title><path d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z" /></svg>Work Experience</h2>
            <ul>
                {values.map((item) => <Job key={item.id} item={item} />)}
            </ul>
        </div>
    )
}

function convertDateToYear (date) {
    return date === 'Present' ? date : new Intl.DateTimeFormat('en-US', { 
        month: 'short', 
        year: 'numeric' 
      }).format(new Date(date));
}



function Job ({item}) {
    return (
        <li>
            <h3>{item.job}</h3>
            <h4>{item.company} | ({convertDateToYear(item.startDate)} - {convertDateToYear(item.endDate)})</h4>
            <p>{item.description}</p>
        </li>
    )
}

export default Work
