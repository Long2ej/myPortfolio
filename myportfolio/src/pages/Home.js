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
            <section className="homebox">


                <div className="herobox">



                    <div className="Welcometxt">
                        <h1>Evan Long</h1>
                    </div>


                    <div className='HSAbox'>
                        <p className='hsatxt'>B.S. Healthservices Administration</p>
                    </div>


                    <div className='skillsbox'>
                        <p className='skillstxt'>HTML--CSS--JavaScript--React--GIT--GitHub</p>
                    </div>




                </div>

            </section>

            <section className="aboutbox">



            </section>




        </>
    )
}
