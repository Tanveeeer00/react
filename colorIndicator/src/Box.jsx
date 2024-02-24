import PropTypes from "prop-types"; // Import PropTypes from 'prop-types' before using it

const Box = ({ color, name }) => {
  return (
    <div className="flex justify-center">
      <div
        className="border border-black-400 h-80 w-80 text-white flex justify-center items-center font-bold bg-black duration-200 text-3xl"
        style={{ backgroundColor: color }}
      >
        {name}
      </div>
    </div>
  );
};

Box.propTypes = {
  color: PropTypes.string.isRequired, // Add 'isRequired' to validate that the 'color' prop is provided.
  name: PropTypes.string.isRequired,
};

export default Box;
