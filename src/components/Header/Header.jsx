import '../../styles/Header.css'

function Header ({values}) {
    return (
        <div className='header section'>
            <h1>{values.fullName}</h1>
            <h2>{values.profession}</h2>
        </div>
    )
}



export default Header