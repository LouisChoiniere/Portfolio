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
                    <p className="resume-list-block-title">Concordia University</p>
                    <p className="resume-list-block-date">2021 - Current</p>
                    <p className="resume-list-block-description">
                        Bachelor of Engineering (Computer Engineering)
                    </p>
                </div>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Champlain regional College St-Lambert</p>
                    <p className="resume-list-block-date">2018 - 2021</p>
                    <p className="resume-list-block-description">
                        DEC - Computer Science Legacy to Mobile
                    </p>
                </div>
            </div>


            <div className="resume-list" >
                <h3 className="resume-list-title">employment</h3>
                <div className="resume-list-block">
                    <p className="resume-list-block-title">Cicle6</p>
                    <p className="resume-list-block-date">Mar 2021 - Jan 2022 (9 months)</p>
                    <p className="resume-list-block-description">
                        Junior Developer
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
                            <li>React</li>
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
                            <li>C++</li>
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