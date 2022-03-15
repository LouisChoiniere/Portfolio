import './Portfolio.scss';

const Portfolio = () => {
    return (<>
        <section id="portfolio" className="container section">
            <h2 id="portfolio_header" className="section-title">My projects_</h2>

            {/* TODO Make filter work when there is more projects */}
            {/* <nav style={{
                marginBottom: "30px"
            }}>
                <ul>
                    <li><a href="#portfolio" className='active' data-portfolio-target-tag="all">all</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="web-sites">web-sites</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="landing-pages">landing pages</a></li>
                </ul>
            </nav> */}

            <div className="portfolio-cards">
                <div className="project-card">
                    <div className="project-card-image">
                        <img src="/img/img_project_portfolio.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">This Portfolio</h3>
                        <p className="project-card-info-description">
                            Create a portfolio using a framework that I have not used before (React).
                            This is to develop my skills using new frameworks.
                            I also familiarized myself using continuous integration using Cloudflare pages to automatically deploy changes made to the portfolio.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>scss</li>
                            <li>Cloudflare pages</li>
                        </ul>
                        {/* <a href="#portfolio" className="project-card-info-link"></a> */}
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-image">
                        <img src="/img/img_project_te-ou.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">Custom web app for construction company</h3>
                        <p className="project-card-info-description">
                            This project was to create a custom website for our final project in college.
                            This custom website was used to track employee schedules, tools and truck locations.
                            It also included an admin page for managing employee credentials and permissions.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>ASP.NET</li>
                            <li>Razor pages</li>
                            <li>Bootstrap</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        {/* <a href="#portfolio" className="project-card-info-link"></a> */}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Portfolio;