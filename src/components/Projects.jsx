import React from 'react';

function Projects(){
    return(
        <section className="container py-5" id="proyectos">
            <h2 className="mb-4">Mis Proyectos</h2>
            <div className="row g-4">
                 <div className="col-md-6">
                     <div className="card h-100">
                        <img className="card-img-top" alt="Análisis de Datos" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400" /> 
                        <div className="card-body">
                            <h3 className="card-title h5">Analista de Datos Educativos</h3>
                            <p className="card-text text-secondary">
                                Trabajé como analista de datos para una empresa dedicada a la acreditación de instituciones educativas. 
                                Mi labor consistía en procesar, limpiar y analizar grandes volúmenes de datos académicos para generar 
                                reportes y dashboards que facilitaran la toma de decisiones y ayudaran a evaluar los estándares de calidad.
                            </p>
                        </div>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="card h-100">
                        <img className="card-img-top" alt="Desarrollo de Landing Page" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" /> 
                        <div className="card-body">
                            <h3 className="card-title h5">Desarrollo de Landing Page</h3>
                            <p className="card-text text-secondary">
                                Diseñé y desarrollé una landing page moderna.
                                Se implementaron las mejores prácticas de web vitals, diseño UX/UI en modo oscuro y componentes interactivos 
                                en React para destacar servicios y facilitar la captación de usuarios de forma atractiva y dinámica.
                            </p>
                        </div>
                     </div>
                 </div>
            </div>
        </section>
    );
}

export default Projects;