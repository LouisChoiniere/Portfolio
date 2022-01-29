import './Portfolio_Section.scss';

const Portfolio = () => {
    return (<>
        <section id="portfolio" className="container section">
            <h2 id="portfolio_header" className="section-title">My projects_</h2>

            <nav style={{
                marginBottom: "30px"
            }}>
                <ul>
                    <li><a href="#portfolio" className='active' data-portfolio-target-tag="all">all</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="mobile apps">mobile apps</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="web-sites">web-sites</a></li>
                    <li><a href="#portfolio" data-portfolio-target-tag="landing-pages">landing pages</a></li>
                </ul>
            </nav>

            <div className="portfolio-cards">
                <div className="project-card">
                    <div className="project-card-image">
                        <img src="/img/img_project_1_mono.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">Mobile and desktop app for London hostel store </h3>
                        <p className="project-card-info-description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
                            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="#portfolio" className="project-card-info-link">www.superapp.com</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-image">
                        <img src="/img/img_project_2_mono.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">Web app page for trevel company</h3>
                        <p className="project-card-info-description">
                            Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an
                            uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="#portfolio" className="project-card-info-link">www.travellend.com</a>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-card-image">
                        <img src="/img/img_project_3_mono.png" alt="project-img" />
                    </div>

                    <div className="project-card-info">
                        <h3 className="project-card-info-title">Admin template for Photo Service</h3>
                        <p className="project-card-info-description">
                            Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye.
                            Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.
                        </p>
                        <p className="project-card-info-stack">Used stack:</p>
                        <ul className="tags">
                            <li>html5</li>
                            <li>css3</li>
                            <li>JavaScript</li>
                            <li>BEM</li>
                            <li>bower</li>
                            <li>grunt</li>
                        </ul>
                        <a href="#portfolio" className="project-card-info-link">www.coolphoto.com</a>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Portfolio;