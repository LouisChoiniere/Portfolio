import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Hello = () => {
    return (<>
        <section id="hello" className="container section">
            <h2 className="section__title">Hi_</h2>
            <p className="section__description">
                I am currently pursuing a degree in Computer Engineering at Concordia University, where I have developed a solid foundation in both programming and hardware design. I am interested in an internship that offers the opportunity to work on projects involving both software development and hardware design.
            </p>
            <a href="/Resume.pdf" target="_blank" className="btn"><FontAwesomeIcon icon={faDownload} /> Download CV</a>
        </section>
    </>);
}

export default Hello;