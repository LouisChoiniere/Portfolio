import './header.component.scss';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socials = [
    {
        link: "https://www.linkedin.com/in/LouisChoiniere/",
        icon: faLinkedin,
    },
    {
        link: "https://github.com/LouisChoiniere/",
        icon: faGithub,
    },
]

const Header = () => {
    return (<>
        <header id="header" className="background header" style={{ backgroundImage: 'linear-gradient(54deg, rgba(74, 76, 179, 0.95) 34%, hsla(0, 34%, 71%, 0.95))' }}>
            <div className="container section">

                <div className="columns">
                    {/* TODO Add picture maybe */}
                    {/* <div className="column is-hidden-mobile is-4">
                        <img className='header__picture' src="/img/img_avatar.png" alt="Picture of me" />
                    </div> */}
                    {/* <div className="column is-12-mobile is-7 pl-5"> */}
                    <div className="column is-12 pl-5">
                        <p className="header__name">Louis Choinière</p>
                        <p className="header__work">Junior Fullstack Developer</p>

                        <dl className="header__contact-list">
                            {/* <dt>Age:</dt>
                            <dd>{getAge()}</dd>
                            <dt>Phone:</dt>
                            <dd><a href="tel:(514) 555 5555">(514) 555 5555</a></dd> */}
                            <dt>Email:</dt>
                            <dd><a href="mailto:louischoiniere@outlook.com">louischoiniere@outlook.com</a></dd>
                            <dt>Location:</dt>
                            <dd>Greater Montreal</dd>
                        </dl>

                        <p className="header__social">
                            {socials.map((social, i) => (
                                <a key={i} href={social.link} target={'_blank'}><FontAwesomeIcon icon={social.icon} size='2x' color='#fff' /></a>
                            ))}
                        </p>
                    </div>
                </div>

            </div>
        </header>
    </>);
};

function getAge() {
    var today = new Date();
    var birthDate = new Date('august 03 2001');

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default Header;