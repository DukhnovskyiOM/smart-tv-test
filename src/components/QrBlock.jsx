import qr2 from "../image/qr2.png";

const QrBlock = () => {
    return (
        <div className="wrapperQr">
            <span className="titleQr">
                Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </span>
            <img alt="qr" src={qr2}></img>
        </div>
    );
};

export default QrBlock;
