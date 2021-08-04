import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1><span>Dallin Poulson</span></h1>
      <nav className="nav-container">
          <ul className='nav-links'>
              <a>About Me</a>
              <a>Projects</a>
              <a>Contact</a>
          </ul>
      </nav>
    </header>
  );
}

export default Header;
