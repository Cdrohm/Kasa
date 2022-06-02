import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="Error">
            <div className="error404">404</div>
            <div className="errorTxt">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="" className="back">Retourner sur la page d’accueil</Link>
        </div>
    );
}

export default Error;