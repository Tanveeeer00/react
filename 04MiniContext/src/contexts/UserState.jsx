import { useState } from "react";
import UserContext from "./UserContext";
import { PropTypes } from "prop-types";

const UserState = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserState.PropTypes = {
  children: PropTypes.element.isRequired,
};
export default UserState;
