import './resume.component.scss';

const education = [
    {
        name: "Concordia University",
        date: "2021 - Current",
        description: "Bachelor of Engineering (Computer Engineering)",
    },
    {
        name: "Champlain regional College St-Lambert",
        date: "2018 - 2021",
        description: "DEC - Computer Science Legacy to Mobile",
    },
]

const employment = [
    {
        name: "circle6",
        data: [
            {
                date: "Jun 2021 - Jan 2022 (8 months)",
                position: "Junior Fullstack Web Developer"
            },
            {
                date: "Mar 2021 - May 2022 (3 months)",
                position: "Internship"
            },
        ],
    }
]

const skills = [
    {
        name: "Language spoken",
        data: ["French", "English"]
    },
    {
        name: "Proficient in",
        data: ["Web Design (HTML, CSS)", "Rest API", "Angular", "React", "C#", "NodeJS", "Javascript", "Typescript", "SQL", "Arduino", "Raspberry Pi"],
    },
    {
        name: "Familiar with",
        data: ["Java", "C++", "PHP", "Cobol", "RPGLE", "PLSQL",],
    },
];

const Resume = () => {
    return (<>
        <section id="resume" className="container section resume">
            <h2 className="section__title">Resume_</h2>

            <div className="resume__list" >
                <h3 className="resume__list-title">education</h3>
                {education.map((edu, i) => {
                    return (
                        <div key={i} className="resume__list-block">
                            <p className="resume__list-block-title">{edu.name}</p>
                            <p className="resume__list-block-date">{edu.date}</p>
                            <p className="resume__list-block-description">{edu.description}</p>
                        </div>
                    )
                })}
            </div>


            <div className="resume__list" >
                <h3 className="resume__list-title">employment</h3>
                {employment.map((emp, i) => {
                    return (
                        <div key={i} className="resume__list-block">
                            <p className="resume__list-block-title">{emp.name}</p>
                            {emp.data.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <p className="resume__list-block-date">{e.date}</p>
                                        <p className="resume__list-block-description">{e.position}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

            <div className="resume__list">
                <h3 className="resume__list-title">Skills</h3>
                {skills.map((skill, i) => {
                    return (
                        <div key={i} className="resume__list-block skills">
                            <p className="resume__list-block-title">{skill.name}</p>
                            <div className="resume__list-block-description">
                                <ul className="tags">
                                    {skill.data.map((e, i) => (<li key={i}>{e}</li>))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    </>);
}

export default Resume;