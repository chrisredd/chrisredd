import React from 'react';

const About = () => {
  return (
    <div 
    name="About"
    className= "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full"
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
                My experience lays mostly in mobile app development but I am always looking for ways to expand my skillset. 
                At my core I am best used when I can contribute to a team but have also led teams from ideation of apps to deployment.

            </p>
            <br/>
            <p className='text-xl'>
                My goals of becoming a software engineer led me to complete a Bachelor's of Art's in Computer Science from the Univerty of San Diego (USD). 
                At USD I gained my leadership experience through leading a Senior Design Team, serving as Vice President to the Black Student Union, and being a board member for the National Society of Black Engineers (USD) chapter. 
                 
            </p>
            <div/>
        </div>
    </div>
    )
}

export default About