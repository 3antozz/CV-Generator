import '../../styles/Languages.css'

function Languages ({values}) {
    return (
        <div className='languages'>
            <h2>Languages</h2>
            <ul>
                {values.map((item) => <Language key={item.id} item={item}/>)}
            </ul>
        </div>
    )
}



function Language ({item}) {
    return (
        <li>
            <h3>{item.name}</h3>
            <p>({item.level})</p>
        </li>
    )
}

export default Languages
