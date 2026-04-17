import React from 'react';
import perfilImg from '../assets/perfil.jpg';

function Hero() {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container px-4 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Hola, soy Percy
            </h1>
            <p className="lead text-secondary">
              Ingeniero de Software | Frontend | Developer | Estudiante
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="https://wa.link/uxuwvj" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 me-md-2 text-white">
                Contactar
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src={perfilImg} 
              alt="Perfil de Percy" 
              className="img-fluid rounded-circle shadow-lg mb-4" 
              style={{ maxWidth: '350px', border: '5px solid var(--primary-color)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;