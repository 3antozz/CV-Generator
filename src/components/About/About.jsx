import '../../styles/About.css'

function About ({values}) {
    return (
        <div className='about'>
            <h1>{values.fullName}</h1>
            <h2>{values.profession}</h2>
            <h3>Profile</h3>
            <p>{values.description}</p>
        </div>
    )
}



export default About