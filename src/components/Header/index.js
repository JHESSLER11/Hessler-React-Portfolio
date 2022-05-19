
function Header(props) {

    const {
        setContactSelected
    } = props;

    return (
        <header>
            <h2> <a data-testid="link" href="/" onClick={() => setContactSelected(false)}>
                Jordan Hessler </a>
            </h2>
        </header>
    )
}

export default Header;