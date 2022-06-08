import {Link} from 'react-router-dom'

function Error() {
  return (
    <div className="Error404">
      <div className="error_name">404</div>
      <div className="error_txt">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="back_link">Retourner sur la page d'accueil.</Link>
    </div>
  );
}

export default Error;