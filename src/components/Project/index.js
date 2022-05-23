

function Portfolio() {

    return (
        <section className="columns  is-multiline is-mobile is-centered">
            <div className="column is-one-third">
                    <img src="/images/weather-app.png"  alt="weather application" title="Weather Application"/>
                <div className="portGit">
                    <a href='https://github.com/JHESSLER11/Weather-Application'>
                    <img src='/images/GitHub-Mark-32px.png' alt='Github Logo'></img>
                    </a>
                    <div>Web API's</div>
                </div>
            </div>
            <div className="column is-one-third">
            <img src="/images/trees.jpeg"  alt="Happy Trees Application" title="Happy Trees!"/>
                <div className="portGit">
                    <a href='https://github.com/HackStreetPeople/happy-trees'>
                    <img src='/images/GitHub-Mark-32px.png' alt='Github Logo'></img>
                    </a>
                    <div>JS, MySQL, Handlebars</div>
                </div>
            </div>
            <div className="column is-one-third">3</div>
            <div className="column is-one-third">4</div>
            <div className="column is-one-third">5</div>
            <div className="column is-one-third">6</div>
        </section>
    )

}

export default Portfolio;