import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import ProjectsList from './ProjectsList';
const data = [
    {
        id:1,
        img: Project1,
        projectName: "Sudemy",
        Skills: "Html,css,js",
        Link: ""
    },
    {
        id:2,
        img: Project2,
        projectName: "Plaza.Z",
        Skills: "Html, css, js , react",
        Link: ""
    },
]
function Projects() {
    return (
        <><div className="container">
            <div className="content">
                <h2>
                    Some Projects, I've Worked On !
                </h2>
                <div className="projectSet">
                    <ProjectsList data={data}/>
                </div>
            </div>
        </div></>
    )
}
export default Projects;