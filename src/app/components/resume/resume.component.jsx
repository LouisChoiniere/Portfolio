import './resume.component.scss';

const Resume = () => {
    return (<>
        <section id="resume" className="container section resume">
            <h2 className="section__title">Resume_</h2>

            <div className="resume__list" >
                <h3 className="resume__list-title">education</h3>
                <div className="resume__list-block">
                    <p className="resume__list-block-title">Concordia University</p>
                    <p className="resume__list-block-date">2021 - Current</p>
                    <p className="resume__list-block-description">
                        Bachelor of Engineering (Computer Engineering)
                    </p>
                </div>
                <div className="resume__list-block">
                    <p className="resume__list-block-title">Champlain regional College St-Lambert</p>
                    <p className="resume__list-block-date">2018 - 2021</p>
                    <p className="resume__list-block-description">
                        DEC - Computer Science Legacy to Mobile
                    </p>
                </div>
            </div>


            <div className="resume__list" >
                <h3 className="resume__list-title">employment</h3>
                <div className="resume__list-block">
                    <p className="resume__list-block-title">Cicle6</p>
                    <p className="resume__list-block-date">Jun 2021 - Jan 2022 (8 months)</p>
                    <p className="resume__list-block-description">
                        Junior Developer
                    </p>
                    <p className="resume__list-block-date">Mar 2021 - May 2022 (3 months)</p>
                    <p className="resume__list-block-description">
                        Internship
                    </p>
                </div>
            </div>

            <div className="resume__list">
                <h3 className="resume__list-title">Skills</h3>
                <div className="resume__list-block skills">
                    <p className="resume__list-block-title">Language spoken</p>
                    <div className="resume__list-block-description">
                        <ul className="tags">
                            <li>French</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
                <div className="resume__list-block skills" style={{ border: 0 }}>
                    <p className="resume__list-block-title">Proficient in</p>
                    <div className="resume__list-block-description">
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
                    </div>
                </div>
                <div className="resume__list-block skills" style={{ border: 0 }}>
                    <p className="resume__list-block-title">Familiar with</p>
                    <div className="resume__list-block-description">
                        <ul className="tags">
                            <li>Java</li>
                            <li>C++</li>
                            <li>PHP</li>
                            <li>Cobol</li>
                            <li>RPGLE</li>
                            <li>PLSQL</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    </>);
}

export default Resume;