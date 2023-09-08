interface Project {
    projectName?: string;
    projectText?: string;
    projectSkills?: string;
    bgImageLink?: string;
    githubLink?: string;
    appLink?: string;
}

function ProjectCard({
        projectName,
        projectText,
        projectSkills,
        bgImageLink,
        githubLink,
        appLink,
    }:Project) {

    const projectArray = new Array(5);
        
    projectArray[0] = (projectName === undefined) ? "" : projectName;
    projectArray[1] = (projectText === undefined) ? "" : projectText;
    projectArray[2] = (projectSkills === undefined) ? "" : projectSkills;
    projectArray[3] = (bgImageLink === undefined) ? "" : bgImageLink;
    projectArray[4] = (githubLink === undefined) ? "" : githubLink;
    projectArray[5] = (appLink === undefined) ? "" : appLink;



        
    return (
        <div>
            <div className="project-card relative w-[40vh] h-[56vh]">
                <div className="inline-block bg-black translate-y-10 absolute left-1/2 -translate-x-1/2 z-30">
                    <div className="grid grid-cols-1 grid-rows-2">
                        <h2>{projectArray[0]}</h2>
                        <p>{projectArray[1]}</p>
                    </div>
                </div>
                <img className="object-cover object-center h-full w-full rounded-lg" draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Biogradska_suma.jpg"></img>
                
                <div className="inline-block bg-black/25 -translate-y-[150%] absolute left-1/2 -translate-x-1/2 z-30 backdrop-blur-sm">
                    <div className="grid grid-cols-1 grid-rows-2">
                        <p>{projectArray[2]}</p>
                        <div className="flex gap-5 justify-center items-center">
  
                            <p>Github</p>
                            <p>App</p>     

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProjectCard;