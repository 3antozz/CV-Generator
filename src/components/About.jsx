import '../styles/About.css'
import { useState } from 'react';

function About ({values}) {
    return (
        <div className='about'>
            <h1>{values.fullName}</h1>
            <h2>{values.profession}</h2>
            <h3>About Me</h3>
            <p>{values.description}</p>
        </div>
    )
}



export default About