import React, { useState } from 'react';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          <h2 className="mb-0">Percy.dev</h2>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse}
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;