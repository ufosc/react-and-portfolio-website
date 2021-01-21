import React from 'react';

import ProjectImage from '../../assets/Project_Image.png'

const MY_PROJECTS = [
    {
        color: "#121212",
        title: "AmongUs",
        image: ProjectImage,
        description: "I worked in a team of 50 on a Java implementation of AmongUs.",
        link: "https://github.com/ufosc"
    },
    {
        color: "#1F1212",
        title: "C#",
        image: ProjectImage,
        description: "I have been a C# developer for over 20 years.",
        link: "https://github.com/ufosc"
    },
    {
        color: "#1F1212",
        title: "Microsoft Excel",
        image: ProjectImage,
        description: "I've made a pivot table or two.",
        link: "https://github.com/ufosc"
    },
    {
        color: "#1F1212",
        title: "SQL",
        image: ProjectImage,
        description: "I dream in SQL",
        link: "https://github.com/ufosc"
    }
];

const Projects = () => {
    const mapProjectToCard = (project) => {
        const {color, title, image, description, link} = project;
        return <div className="col" key={`project-${title}`}>
            <div className="card text-white bg-dark h-100" style={{borderColor: color}}>
                <img src={image} className="card-img-top" alt={`Small header for project with title ${title}`}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-light">Open Project</a>
                </div>
            </div>
        </div>
    }

    return (
        <div className="container">
            <div className="display-3 text-center mb-2">
                Projects
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {MY_PROJECTS.map(mapProjectToCard)}
            </div>
        </div>
    );
};

export default Projects;
