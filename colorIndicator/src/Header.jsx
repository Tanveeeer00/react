import PropTypes from "prop-types";
const Header = ({ heading }) => {
  return (
    <div className="flex justify-center content-top mb-3 font-serif">
      <h1>{heading}</h1>
    </div>
  );
};
Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
export default Header;
