import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1><span>Dallin Poulson</span></h1>
      <nav className="nav-container">
          <ul className='nav-links'>
              <a className='header-links' href="#about-me">About Me</a>
              <a className='header-links' href="#projects">Projects</a>
              <a className='header-links' href="#contact">Contact</a>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
