import '../../styles/Skills.css'

function Skills ({values}) {
    return (
        <div className='education'>
            <h2>Skills Summary</h2>
            <ul>
                {values.map((item) => <Skill key={item.id} item={item}/>)}
            </ul>
        </div>
    )
}



function Skill ({item}) {
    return (
        <li>
            <h3>{item.name}</h3>
        </li>
    )
}

export default Skills
