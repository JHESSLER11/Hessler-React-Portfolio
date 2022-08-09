

function Portfolio() {

    return (
        <section className="portfolio">
            <div className="is-size-4 p-3">Portfolio</div>
            <div className="columns  is-multiline is-mobile is-centered p-3">
                <div className="c1 column is-one-third m-1">
                    <div className="portGit is-centered">
                        <div>Weather Application</div>
                            <a href='https://github.com/jhessler11/Weather-Application'>
                            <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                            </a>
                        <div>Web API's</div>
                    </div>
                </div>
                <div className="c2 column is-one-third m-1">
                    <div className="portGit">
                        <div>Happy Trees</div>
                            <a href='https://github.com/HackStreetPeople/happy-trees'>
                            <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                            </a>
                        <div>JS, MySQL, Handlebars</div>
                    </div>
                </div>
                <div className="c3 column is-one-third m-1">
                <div className="portGit">
                    <div>Tech Blog</div>
                        <a href='https://github.com/jhessler11/Tech-Blog'>
                        <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                        </a>
                        <div>JS and MySQL</div>
                    </div>
                </div>
                <div className="c4 column is-one-third m-1">
                <div className="portGit">
                    <div>CodeSpect</div>
                        <a href='https://github.com/Weekend-at-MERNie-s/checkout-my-code'>
                        <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                        </a>
                        <div>MERN Stack Application</div>
                    </div>
                </div>
                <div className="c5 column is-one-third m-1">
                    <div className="portGit">
                        <div>Budget Tracker</div>
                            <a href='https://github.com/jhessler11/hess-budget-tracker'>
                            <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                            </a>
                        <div>JS, NoSQL, and PWA</div>
                    </div>
                </div>
                <div className="c6 column is-one-third m-1">
                    <div className="portGit">
                        <div>Dognostic</div>
                            <a href='https://github.com/Boolean-Hooligans/dognostic-1'>
                            <img src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                            </a>
                        <div>JS, Web API's</div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Portfolio;