// rafce creating component template
//impt create prop template

import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div>
      <h1 className="header p-2">{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "Analysis Tab",
};

//Adding CSS within Component
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
