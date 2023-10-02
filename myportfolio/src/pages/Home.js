import Profilepic from '../pages/Images/Profilepic.jpg';
import React, { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        const text = document.querySelector('h1');

        if (!text) return; // Exit if h1 isn't found

        const strText = text.textContent;
        const splitText = strText.split("");
        text.textContent = "";

        for (let i = 0; i < splitText.length; i++) {
            text.innerHTML += "<span>" + splitText[i] + "</span>";
        }

        let char = 0;
        const timer = setInterval(onTick, 60);

        function onTick() {
            const span = text.querySelectorAll('span')[char];
            span.classList.add('fade');
            char++;
            if (char === splitText.length) {
                complete();
            }
        }

        function complete() {
            clearInterval(timer);
        }

        // Cleanup for the effect in case the component unmounts while the animation is still ongoing
        return () => clearInterval(timer);

    }, []);  // Empty dependency array ensures this runs once after component is mounted

    return (
        <>
            <div className="homebox">

                <div className="picbox">
                    <img src={Profilepic} className="profilepic" alt="Profile"></img>
                </div>


                <div className="Messagebox">

                    <div className="Welcometxt">
                        <h1>Welcome,</h1>
                    </div>

                    <div className="txtbox">
                        <p> Currently a senior at James Madison University, I'm pursuing a major in Healthcare Administration complemented by a minor in General Business. My academic foundation has given me a thorough understanding of healthcare systems,
                            but my true passion lies in the realms of entrepreneurship, startups, and technology. In addition to my formal education, I've dedicated time to teach myself coding, seeking ways to integrate this skill with healthcare innovation.
                            I'm actively looking for opportunities to blend my healthcare background with the dynamic world of tech and startups.
                            I welcome connections with professionals who share a similar vision.
                        </p>
                    </div>

                </div>


            </div>


            <section className="skills-section">
                <div className="skills-container">
                    Filler text
                </div>



            </section>



        </>
    )
}
