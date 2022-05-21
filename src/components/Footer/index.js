import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {

    return (
        <section className="footer">
            <div className="content has-text-centered">
                <div>
                    <a href='https://github.com/JHESSLER11'>
                    <FontAwesomeIcon icon="fa-brands fa-github" size='lg'/>
                    </a>
                </div>
                <div>
                    <FontAwesomeIcon icon="fab fa-linkedin"/>
                </div>
                <div>
                    <FontAwesomeIcon icon="fab fa-stack-overflow" />
                </div>
            </div>
        </section>
    )

}

export default Footer;