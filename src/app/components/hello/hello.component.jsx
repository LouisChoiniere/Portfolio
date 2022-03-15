import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Hello = () => {
    return (<>
        <section id="hello" className="container section">
            <h2 id="hello_header" className="section-title">Hi_</h2>
            {/* TODO write good intro paragraph */}
            <p className="section__description">
                I am a Junior developer with the most experience in full stack web development.
                </p>
            <a href="/Resume.pdf" target="_blank" className="btn"><FontAwesomeIcon icon={faDownload}/> Download CV</a>
        </section>
    </>);
}

export default Hello;