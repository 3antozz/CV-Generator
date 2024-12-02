import '../../styles/Languages.css'
import { useState } from 'react';

function Languages () {
    return (
        <div className='education'>
            <h2>Languages</h2>
            <Language />
            <Language />
        </div>
    )
}



function Language () {
    return (
        <div>
            <h3>Language</h3>
            <h3>Level</h3>
        </div>
    )
}

export default Languages
