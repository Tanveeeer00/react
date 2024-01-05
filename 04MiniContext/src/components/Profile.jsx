import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div> Please come again</div>;
  return (
    <div>
      {" "}
      Welcome {user.userName} !! and your password {user.password}
    </div>
  );
}

export default Profile;
