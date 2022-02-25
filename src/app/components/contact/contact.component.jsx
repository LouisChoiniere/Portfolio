import './contact.component.scss';

const Contact = () => {
    return (<>
        <section id="contact" className="background" style={{ backgroundImage: 'linear-gradient(54deg, rgba(74, 76, 179, 0.95) 34%, hsla(0, 34%, 71%, 0.95)), url(/img/img_bg_main.jpg)' }}>

            <div className="container section">
                <h2 id="portfolio_header" className="section-title">Get in touch_</h2>

                {/* TODO Make form work */}
                <form>
                    <div className="form-group">
                        <input className="form-field js-field-name" type="text" placeholder="Your name" required="" />
                    </div>
                    <div className="form-group">
                        <input className="form-field js-field-email" type="email" placeholder="Your e-mail" required="" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-field js-field-message" placeholder="Type the message here" required=""></textarea>
                    </div>
                    <button className="btn" type="submit" value="Send">Send</button>
                </form>
            </div>


        </section>
    </>
    );
}

export default Contact;