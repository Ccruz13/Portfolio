import React from 'react'
import "./hero.css"
import Typical from 'react-typical'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hello">
                <h1>Hi, My Name is</h1>
            </div>
            <div className="name">
                <h2>Charlie Cruz</h2>
            </div>
            <div className="typical">
                <p>
                <Typical 
                loop={Infinity}
                wrapper='b'
                steps={[
                    'I am a Full-Stack Developer !', 2000,
                    'I enjoy creating things that live on the web !', 2000,
                    'I love to Develop !', 2000
                ]}
                />
                </p>
            </div>
        </section>
    )
}

export default Hero;
