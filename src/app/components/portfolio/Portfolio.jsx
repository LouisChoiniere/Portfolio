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
                        {/* TODO Change image */}
                        <img src="/img/img_project_1_mono.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">This Portfolio</h3>
                        {/* TODO Better description */}
                        <p className="project-card-info-description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
                            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>scss</li>
                            <li>Cloudflare pages</li>
                        </ul>
                        {/* <a href="#portfolio" className="project-card-info-link">www.superapp.com</a> */}
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-image">
                        {/* TODO Change image */}
                        <img src="/img/img_project_2_mono.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">Custom web app for construction company</h3>
                        {/* TODO Better description */}
                        <p className="project-card-info-description">
                            Custom website to track employee schedules, tools and truck locations. Also included an admin page for managing employee credentials and permitions. Made for final project for cegep.
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
                        {/* <a href="#portfolio" className="project-card-info-link">www.travellend.com</a> */}
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Portfolio;