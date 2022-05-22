import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import 'font-awesome/css/font-awesome.min.css';
//import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-solid-svg-icons'


function Footer() {

    return (
        <section className="footer">
            <div className="content has-text-centered">
                <div>
                    <a href='https://github.com/JHESSLER11'>
                    <img src='/images/GitHub-Mark-32px.png' alt='Github Logo'></img>
                    </a>
                </div>
                <div>
                <a href='https://www.linkedin.com/in/hessler11/'>
                    <img src='/images/linkedin-32.png' alt='linkedin Logo'></img>
                    </a>
                </div>
                <a href='https://stackoverflow.com/users/18665163/hess'>
                    <img src='/images/stack-overflow-32.png' alt='Stack Overflow Icon'></img>
                    </a>
                <div>
                    
                </div>
            </div>
        </section>
    )

}

export default Footer;