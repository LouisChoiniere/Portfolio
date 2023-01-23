import './projects.component.scss';

const projects = [
    {
        imgPath: "/img/img_project_portfolio.png",
        name: "This Portfolio",
        date: "2022",
        description:
            `Create a portfolio using a framework that I have not used before (React).
            This is to develop my skills using new frameworks.
            I also familiarized myself using continuous integration using Cloudflare pages to automatically deploy changes made to the portfolio.`,
        stack: [
            "React",
            "JavaScript",
            "scss",
            "Cloudflare pages",
        ]
    },
    {
        imgPath: "/img/img_project_te-ou.png",
        name: "Custom web app for construction company",
        date: "2020 - 2021",
        description:
            `This project was to create a custom website for our final project in college.
            This custom website was used to track employee schedules, tools and truck locations.
            It also included an admin page for managing employee credentials and permissions.`,
        stack: [
            "ASP.NET",
            "Razor pages",
            "Bootstrap",
            "MySQL",
        ]
    },
]

const Projects = () => {
    return (<>
        <section id="projects" className="container section projects">
            <h2 className="section__title">My projects_</h2>

            {/* TODO Make filter work when there is more projects */}
            {/* <nav style={{
                marginBottom: "30px"
            }}>
                <ul>
                    <li><a href="#projects" className='active'>all</a></li>
                    <li><a href="#projects">mobile apps</a></li>
                    <li><a href="#projects">web-sites</a></li>
                    <li><a href="#projects">landing pages</a></li>
                </ul>
            </nav> */}
            
            {projects.map((project , i) => {
                return (
                    <div key={i} className="projects__card">
                        <div className="projects__card-image">
                            <img src={project.imgPath} alt="project-img" />
                        </div>

                        <div className="projects__card-info">
                            <h3 className="projects__card-info-title">{project.name}</h3>
                            <p className="projects__card-info-description">{project.date}</p>
                            <p className="projects__card-info-description">{project.description}</p>
                            <p className="projects__card-stack">Used stack:</p>
                            <ul className="tags">
                                {project.stack.map((e, i) => (<li key={i}>{e}</li>))}
                            </ul>
                            {/* <a href="#portfolio" className="project-card-info-link"></a> */}
                        </div>
                    </div>
                )
            })}

        </section>
    </>);
}

export default Projects;