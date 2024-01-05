import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-gray-700 text-center text-white text-3xl flex content-center p-4">
        User : {userid}
      </div>
    </>
  );
}

export default User;
