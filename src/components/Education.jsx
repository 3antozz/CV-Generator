import '../styles/Education.css'
import { useState } from 'react';

function Education () {
    return (
        <div className='education'>
            <h2>Education</h2>
            <Major />
            <Major />
        </div>
    )
}



function Major () {
    return (
        <div>
            <h3>Enter your Major</h3>
            <p>Name of your institution</p>
            <p>Date</p>
        </div>
    )
}

export default Education
