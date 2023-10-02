import Profilepic from '../pages/Images/Profilepic.jpg';
import React, { useEffect } from 'react';

export default function Home() {

    useEffect(() => {

        //Intersection Observer//
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden, .hidden1, .hidden2');
        hiddenElements.forEach((el) => observer.observe(el));


        //Scroll effect//
        let isScrolling = false;
        let scrolledOnce = false;
        let stickyScroll = false;
        let startY;

        function handleScroll(event) {
            if (scrolledOnce) {
                if (stickyScroll) {
                    event.preventDefault();
                }
                return;
            }

            if (isScrolling || (event.deltaY && event.deltaY <= 0)) return;

            event.preventDefault();

            isScrolling = true;
            scrolledOnce = true;
            stickyScroll = true;

            let scrollToPosition = window.innerHeight * 1.08 + window.scrollY;
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                isScrolling = false;
            }, 800);

            setTimeout(() => {
                stickyScroll = false;
                window.removeEventListener('wheel', handleScroll);
                window.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchmove', handleTouchMove);
            }, 1000);
        }

        function handleTouchStart(event) {
            startY = event.touches[0].clientY;
        }

        function handleTouchMove(event) {
            if (!startY) return;

            let currentY = event.touches[0].clientY;

            // Detects if the user is scrolling down
            if (startY > currentY) {
                handleScroll({
                    deltaY: startY - currentY,
                    preventDefault: function () { event.preventDefault(); }
                });
            }
        }

        window.addEventListener('wheel', handleScroll, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });


        //Typing effect//

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
                    <div className='HSAbox hidden'>
                        <p className='hsatxt'>B.S. Healthservices Administration</p>
                    </div>
                    <div className='skillsbox'>
                        <p className='skillstxt'>HTML--CSS--JavaScript--React--GIT--GitHub</p>
                    </div>

                </div>

                <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>

            </section>

            <section className="aboutsectionparent">

                <div className="aboutsection">


                    <h1 className='Aboutme'>About Me</h1>

                    <div className="aboutbox">
                        <img className="profilepic" src={Profilepic} alt="Profilepic" />
                        <p>Filler Text</p>

                    </div>

                </div>


            </section>




        </>
    )
}
