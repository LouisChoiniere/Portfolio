import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.component.scss';


const Header = () => {
    return (<>
        <header id="header" className="background personal-profile" style={{ backgroundImage: 'linear-gradient(54deg, rgba(74, 76, 179, 0.95) 34%, hsla(0, 34%, 71%, 0.95))' }}>
            <div className="container section">

                <div className="columns">
                    {/* TODO Add picture maybe */}
                    {/* <div className="column is-hidden-mobile is-4">
                        <img className='personal-profile__picture' src="/img/img_avatar.png" alt="Picture of me" />
                    </div> */}
                    {/* <div className="column is-12-mobile is-7 pl-5"> */}
                    <div className="column is-12 pl-5">
                        <p className="personal-profile__name">Louis Choinière</p>
                        <p className="personal-profile__work">Junior Fullstack Developer</p>

                        <dl className="personal-profile__contact-list">
                            <dt>Age:</dt>
                            <dd>{getAge()}</dd>
                            {/* <dt>Phone:</dt>
                            <dd><a href="tel:(514) 555 5555">(514) 555 5555</a></dd> */}
                            <dt>Email:</dt>
                            <dd><a href="mailto:louischoiniere@outlook.com">louischoiniere@outlook.com</a></dd>
                            <dt>Location:</dt>
                            <dd>Greater Montreal</dd>
                        </dl>

                        <p className="personal-profile__social">
                            <a href="https://www.linkedin.com/in/louis-choiniere/" target={'_blank'}><FontAwesomeIcon icon={faLinkedin} size='2x' color='#fff' /></a>
                            <a href="https://github.com/LouisChoiniere/" target={'_blank'}><FontAwesomeIcon icon={faGithub} size='2x' color='#fff' /></a>

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