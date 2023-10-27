import { PropTypes } from "prop-types";

const BannerMain = ({ children }) => {
    return <div className="mainBanner">{children}</div>;
};

BannerMain.propTypes = {
    children: PropTypes.element,
};

export default BannerMain;
