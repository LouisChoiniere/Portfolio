import './Resume.scss';

const Resume = () => {
    return (<>
        <section id="resume" className="container section">

            <h2 id="resume_header" className="section-title">Resume_</h2>
            <p className="section__description">
                Lorem ipsum dolor sit amet, <i><b>communication</b></i> adipisicing elit, <i><b>helpful</b></i> eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <i><b>sence of
                    humour</b></i> ullamco laboris nisi ut <i><b>honest</b></i> ea commodo consequat. Duis aute irure dolor in
                upper-intermediate english level velit dolore eu ivivdtevoluptatem ontend developer.
            </p>

            <div className="resume-list" >
                <h3 className="resume-list-title">education</h3>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">University of Minnesota Twin Cities </p>
                    <p className="resume-list-block-date">2006 - 2010</p>
                    <p className="resume-list-block-description">
                        Bachelor Computer Engineering Lorem
                    </p>
                </div>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">School of Informational technologies</p>
                    <p className="resume-list-block-date">2004 - 2005</p>
                    <p className="resume-list-block-description">
                        Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius-
                        mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>
                </div>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Lorem Ipsum School</p>
                    <p className="resume-list-block-date">2003 - 2006</p>
                    <p className="resume-list-block-description">
                        Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                        incididunt ut
                    </p>
                </div>
            </div>


            <div className="resume-list" >
                <h3 className="resume-list-title">employment</h3>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Apple</p>
                    <p className="resume-list-block-date">2006 - 2010</p>
                    <p className="resume-list-block-description">
                        Senior Full Stack Developer
                    </p>
                </div>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Tech university</p>
                    <p className="resume-list-block-date">2004 - 2005</p>
                    <p className="resume-list-block-description">
                        Awesome developer, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius-
                        mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>
                </div>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Molly’s studio</p>
                    <p className="resume-list-block-date">2003 - 2006</p>
                    <p className="resume-list-block-description">
                        Programmer Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor
                        incididunt ut
                    </p>
                </div>
            </div>

            <div className="resume-list">
                <h3 className="resume-list-title">Skills</h3>
                <div className="resume-list-block skills">
                    <p className="resume-list-block-title">Language spoken</p>
                    <p className="resume-list-block-description">
                        <ul className="tags">
                            <li>French</li>
                            <li>English</li>
                        </ul>
                    </p>
                </div>
                <div className="resume-list-block skills" style={{ border: 0 }}>
                    <p className="resume-list-block-title">Proficient in</p>
                    <p className="resume-list-block-description">
                        <ul className="tags">
                            <li>Web Design (HTML, CSS)</li>
                            <li>Rest API</li>
                            <li>Angular</li>
                            <li>C#</li>
                            <li>NodeJS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>SQL</li>
                        </ul>
                    </p>
                </div>
                <div className="resume-list-block skills" style={{ border: 0 }}>
                    <p className="resume-list-block-title">Familiar with</p>
                    <p className="resume-list-block-description">
                        <ul className="tags">
                            <li>Java</li>
                            <li>PHP</li>
                            <li>Cobol</li>
                            <li>RPGLE</li>
                            <li>PLSQL</li>
                        </ul>
                    </p>
                </div>
            </div>
            
        </section>
    </>);
}

export default Resume;