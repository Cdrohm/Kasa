import logo from '../assets/logo.svg';

function Footer() {
    return (
        <div className="footer">
            <img src={logo} alt="logo" className='logoFooter'/>
            <div>2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer;