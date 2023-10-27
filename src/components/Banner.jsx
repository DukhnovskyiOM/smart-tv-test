import { PropTypes } from "prop-types";
import qr1 from "../image/qr1.png";

const Banner = ({setDisplay}) => {
    return (
        <div className="banner">
            <div className="wrap">
                <span className="title">
                    ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
                    <br /> ПОДАРИТЕ ЕМУ СОБАКУ!
                </span>
                <img alt="qr" src={qr1}></img>
                <span className="text">Сканируйте QR-код или нажмите ОК</span>
                <button tabIndex={0} className="button" onClick={() => setDisplay('two')} onKeyDown={() => setDisplay('two')}>OK</button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    setDisplay: PropTypes.func,
};

export default Banner;
