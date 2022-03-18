import { useState } from 'react';

import './contact.component.scss';

const Contact = () => {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    return (<>
        <section id="contact" className="background" style={{ backgroundImage: 'linear-gradient(54deg, rgba(74, 76, 179, 0.95) 34%, hsla(0, 34%, 71%, 0.95)), url(/img/img_bg_main.jpg)' }}>

            <div className="container section">
                <h2 id="portfolio_header" className="section-title">Get in touch_</h2>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <input type="text" placeholder="Subject" required={true} value={subject} onChange={e => setSubject(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Type the message here" required={true} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button className="btn" type="submit" value="Send">Send</button>
                </form>
            </div>

        </section>
    </>);

    function submit(e) {
        e.preventDefault();

        let link = `mailto:louischoiniere@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
        window.open(link);
    }
}

export default Contact;