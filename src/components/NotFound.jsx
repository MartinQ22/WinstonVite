import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-content">
      <h1 className="not-found-error-code">404</h1>
      <h2 className="not-found-title">Página no encontrada</h2>
      <p className="not-found-description">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="not-found-button">
        Volver al inicio
      </Link>
    </div>
  </div>
);

export default NotFound;
