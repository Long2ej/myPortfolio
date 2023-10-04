import React, { useEffect } from 'react';
import EckenrodeViritical from '../pages/Images/EckenrodeVirtical.png';
import TFL from '../pages/Images/TFL.png';



export default function Projects() {

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





    }, []);







    return (
        <>

            <section className="projects-section-parent">
                <div className="project-card hidden1">
                    <div className="cardspace">
                        <a target="_blank" href='https://teameckenrode.com/'><img className="project-img" src={EckenrodeViritical} alt="Eckenrode" /></a>
                        <div className="project-txt">
                            <h1 className="project-title">Team Eckenrode Gym & Fitness</h1>
                            <p className="project-description">My first project. Built using HTML, CSS and some vanella JavaScript. </p>
                            <a href="https://teameckenrode.com/" target="_blank" rel="noreferrer" className="project-link">Visit</a>
                        </div>
                    </div>

                </div>

                <div className="project-card hidden1">
                    <div className="cardspace">
                        <a target="_blank" href='https://totalfitnesslook-pt.com/'><img className="project-img" src={TFL} alt="Total Fitness Look" /></a>
                        <div className="project-txt">
                            <h1 className="project-title">Total Fitness Look Personal Trainers</h1>
                            <p className="project-description">Built using HTML, CSS and some vanella JavaScript.</p>
                            <a href="https://totalfitnesslook-pt.com/" target="_blank" rel="noreferrer" className="project-link">Visit</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

