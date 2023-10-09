import React, { useRef, useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SkillsSection() {
    const skills = [
        { name: 'Healthcare Systems', proficiency: 99 },
        { name: 'HTML/CSS', proficiency: 90 },
        { name: 'JavaScript', proficiency: 60 },
        { name: 'React', proficiency: 50 },
        { name: 'Git', proficiency: 70 },
        { name: 'GitHub', proficiency: 75 }
    ];

    const skillsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Container ref={skillsRef}>
            <h2>My Skills</h2>
            {skills.map((skill, index) => (
                <Row key={index} className="mb-3">
                    <Col md={2}>
                        <strong>{skill.name}</strong>
                    </Col>
                    <Col md={10}>
                        <ProgressBar now={isVisible ? skill.proficiency : 0} label={<span className="progress-bar-label">{`${skill.proficiency}%`}</span>} />
                    </Col>
                </Row>
            ))}
        </Container>
    );
}

export default SkillsSection;
