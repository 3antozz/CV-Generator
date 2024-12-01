import '../styles/Work.css'
import { useState } from 'react';

function Work () {
    return (
        <div className='work'>
            <h2>Work Experience</h2>
            <Job />
            <Job />
        </div>
    )
}



function Job () {
    return (
        <div>
            <h3>Company name here</h3>
            <h4>Job Position</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur natus enim doloremque impedit velit officia, non laborum provident sit esse vero suscipit dolores error voluptatibus maiores, dolore minima distinctio dolorem?</p>
        </div>
    )
}

export default Work
