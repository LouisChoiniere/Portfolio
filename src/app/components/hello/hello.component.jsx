import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Hello = () => {
    return (<>
        <section id="hello" className="container section">
            <h2 className="section__title">Hi_</h2>
            <p className="section__description">
                I am a Junior developer with the most experience in full stack web development looking for an internship to further develop my skills and improve my knowledge set.
            </p>
            <a href="/Resume.pdf" target="_blank" className="btn"><FontAwesomeIcon icon={faDownload} /> Download CV</a>
        </section>
    </>);
}

export default Hello;