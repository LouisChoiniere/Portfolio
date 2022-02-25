import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Hello = () => {
    return (<>
        <section id="hello" className="container section">
            <h2 id="hello_header" className="section-title">Hi_</h2>
            {/* TODO write good intro paragraph */}
            <p className="section__description">
                I am a Junior developer with the most experience in full stack web development.
                I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation,
                layout and programming to UX and SEO.Skilled at writing well - designed, testable and efficient code using current best practices in Web development.Fast learner, hard worker and team player who is proficient in
                an array of scripting languages and multimedia Web tools.</p>
            <a href="/Resume.pdf" target="_blank" className="btn"><FontAwesomeIcon icon={faDownload}/> Download CV</a>
        </section>
    </>);
}

export default Hello;