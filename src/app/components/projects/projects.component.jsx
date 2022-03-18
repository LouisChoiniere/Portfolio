import './projects.component.scss';

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

            <div className="projects__cards">
                <div className="projects__card">
                    <div className="projects__card-image">
                        <img src="/img/img_project_portfolio.png" alt="project-img" />
                    </div>

                    <div className="projects__card-info">
                        <h3 className="projects__card-info-title">This Portfolio</h3>
                        <p className="projects__card-info-description">2022</p>
                        <p className="projects__card-info-description">
                            Create a portfolio using a framework that I have not used before (React).
                            This is to develop my skills using new frameworks.
                            I also familiarized myself using continuous integration using Cloudflare pages to automatically deploy changes made to the portfolio.
                        </p>
                        <p className="projects__card-stack">Used stack:</p>
                        <ul className="tags">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>scss</li>
                            <li>Cloudflare pages</li>
                        </ul>
                        {/* <a href="#portfolio" className="project-card-info-link"></a> */}
                    </div>
                </div>

                <div className="projects__card">
                    <div className="projects__card-image">
                        <img src="/img/img_project_te-ou.png" alt="project-img" />
                    </div>

                    <div className="projects__card-info">
                        <h3 className="projects__card-info-title">Custom web app for construction company</h3>
                        <p className="projects__card-info-description">2020 - 2021</p>
                        <p className="projects__card-info-description">
                            This project was to create a custom website for our final project in college.
                            This custom website was used to track employee schedules, tools and truck locations.
                            It also included an admin page for managing employee credentials and permissions.
                        </p>
                        <p className="projects__card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>ASP.NET</li>
                            <li>Razor pages</li>
                            <li>Bootstrap</li>
                            <li>MySQL</li>
                        </ul>
                        {/* <a href="#portfolio" className="project-card-info-link"></a> */}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Projects;