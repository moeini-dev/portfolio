import './project.css';

function Project({title, description, image, stack, link}) {
    return(
        // <div className="project-card" style={{backgroundImage:`url(${image})`}}></div>
        <a className="project-card" href={link} target="_blank" rel="noopenr">
            <div className="project-card-overlay"></div>
            <img className="project-card-image" src={image} />
            <div className="project-card-info">
                <div className="project-card-title">{title}</div>
                <div className="project-card-description">{description}</div>
                <div className="project-card-stack">
                    {stack.map((item) => (
                        <div className="project-stack">{item}</div>
                    ))}
                </div>
            </div>
        </a>
    
        
    );
}

export default Project;