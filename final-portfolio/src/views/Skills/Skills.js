import React, { useState } from 'react';

const MY_SKILLS = [
    {
        color: "#0d6efd",
        title: "Java",
        icon: null,
        description: "I have been a java developer for over 20 years."
    },
    {
        color: "#0d6efd",
        title: "C#",
        icon: null,
        description: "I have been a C# developer for over 20 years."
    },
    {
        color: "#0d6efd",
        title: "Microsoft Excel",
        icon: null,
        description: "I've made a pivot table or two."
    },
    {
        color: "#0d6efd",
        title: "SQL",
        icon: null,
        description: "I dream in SQL"
    }
];

const Skills = () => {
    const [currSkill, setSkill] = useState(null);

    const mapSkillToElement = (skill) => {
        const { title, icon } = skill;
        return <div className="row mb-3" key={`skill-${title}`} onClick={(e) => setSkill(skill)}>
            {icon ? <span></span> : <></>}
            <span className="badge rounded-pill fw-bold fs-6 bg-primary">{title}</span>
        </div>
    }

    return <div className="container">
        <div className="display-3 text-center">
            Skills
        </div>
        <div className="lead text-center mb-3">
            Click to see more information
        </div>
        <div className="row d-flex justify-content-evenly">
            <div className="col-3">
                {MY_SKILLS.slice(0, MY_SKILLS.length / 2).map(mapSkillToElement)}
            </div>
            <div className="col-3">
                {MY_SKILLS.slice(MY_SKILLS.length / 2).map(mapSkillToElement)}
            </div>
            <div className="card text-white bg-dark w-75 mt-3">
                <div className="card-body">
                    {(currSkill && currSkill.description) || "Click a skill to see more information"}
                </div>
            </div>
        </div>
    </div>;
};

export default Skills;
