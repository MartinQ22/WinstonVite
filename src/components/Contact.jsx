
const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <p className="contact-subtitle">Contacto</p>
      <h2 className="contact-title">PONTE EN CONTACTO</h2>
      <p className="contact-description">
        Tu destino online para todo lo relacionado con PC. Ofrecemos una amplia selección de componentes, periféricos y accesorios de las mejores marcas, garantizando calidad y rendimiento para gamers, profesionales y entusiastas
      </p>

      <div className="contact-details">
        <div className="contact-item">
          <div className="icon-box">
            🏠
          </div>
          <div>
            <h4>Nuestra Ubicación</h4>
            <p>991 Street Boulevard<br /> Silent Hill, California, Estados Unidos</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box">
            📞
          </div>
          <div>
            <h4>Numero de Telefono</h4>
            <p>(+351)81 414 257 9980</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-box">
            ✉️
          </div>
          <div>
            <h4>Nuestro Mail</h4>
            <p>InfoWinston@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;