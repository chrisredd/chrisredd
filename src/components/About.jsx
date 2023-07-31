import React from 'react';

const About = () => {
  return (
    <div 
    name="About"
    className= "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        >
            <div
            className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'
                > About</p>
            </div>
            <p className="text-xl mt-30">
            As a child of San Franciso in the 2000's I learned three things: Innovation requires failure, success is always about perspective, and technology is the key to unlocking a better world. 
            I've carried these lessons from when I was a young boy to now being a proud software engineer. 
            </p>
            <br/>
            <p className='text-xl'>
            I went on to complete my BA in Computer Science at the University of San Diego (USD). During my undergraduate journey I was able to lead a senior design team of my own creation from ideation to deployment, serve as Vice President of the Black Student Union, and serve as board member to the National Society of Black Engineers (USD Chapter). 
            I was delighted to discover my love of mobile app development and able to parlay my leadership and technical experience into opportunities at NASA in route to completeing my degree.  
            I am defined by my drive to expand my skill set and look forward to solving new probelms.
            </p>
            <br/>
            <p className='text-xl'>
            </p>
            <div/>
        </div>
    </div>
    )
}

export default About