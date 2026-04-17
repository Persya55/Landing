import React from 'react';

function Contact(){
    return(
        <section className="container py-5 text-center" id="contacto">
            <div className="p-5 rounded-4" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h2 className="mb-3 text-white">Contáctame</h2>
                <p className="text-secondary mb-4">¿Trabajamos juntos? Escríbeme y hagamos realidad tu idea.</p>
                <a href="https://wa.link/uxuwvj" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-5 text-white">
                    Contactar
                </a>
            </div>
        </section>
    );
}

export default Contact;