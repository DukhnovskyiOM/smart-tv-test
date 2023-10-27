import { PropTypes } from "prop-types";

const BtnCloseOver = ({ setDisplay }) => {
    const close = () => {
        setDisplay("one");
    };
    return (
        <div
            tabIndex={0}
            className="btnClose"
            onClick={close}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    close();
                }
            }}
        ></div>
    );
};

BtnCloseOver.propTypes = {
    setDisplay: PropTypes.func,
};

export default BtnCloseOver;
