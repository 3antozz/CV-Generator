import '../../styles/Skills.css'
import { useState } from 'react';

function Skills () {
    return (
        <div className='education'>
            <h2>Skills</h2>
            <Skill />
            <Skill />
        </div>
    )
}



function Skill () {
    return (
        <div>
            <h3>Enter your Skill</h3>
        </div>
    )
}

export default Skills
