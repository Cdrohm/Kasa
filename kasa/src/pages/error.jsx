//import

function Error() {
    return (
        <div className="Error">
            <div className="error404">404</div>
            <div className="errorTxt">Oups! La page que vous demandez n'existe pas.</div>
            <link to="" className="back">Retourner sur la page d’accueil</link>
        </div>
    );
}

export default Error;