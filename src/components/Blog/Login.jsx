import { useState } from "react";
import { encrypt } from "../../util/encrypt";
import { LOGIN_URL } from "../../util/constants";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../util/tokenService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const encryptedPassword = encrypt(password);
    const encryptedUsername = encrypt(username);
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        username: encryptedUsername,
        password: encryptedPassword,
      }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const body = await response.json();
      setAccessToken(body.accessToken);
      clearFields();
      navigate("/blog/edit");
    } else {
      setPassword("");
      showMessage("Login failed");
    }
  };

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  const showMessage = (message) => {
    alert(message);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="rounded-lg dark:bg-inherit text-right">
        <div className="font-poppins text-center mb-10 mt-6 text-2xl text-[#333333] dark:text-[#e0e0e0]">
          Reads
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="mb-4 px-3 py-2 w-72 font-opensans rounded-lg ring-1 ring-gray-300"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 px-3 py-2 w-72 font-opensans rounded-lg ring-1 ring-gray-300"
        />
        <br />
        <button
          onClick={() => handleLoginClick()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
