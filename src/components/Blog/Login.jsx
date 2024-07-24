import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
  };

  return (
    <div className="flex items-center flex-col">
      <div className="rounded-lg dark:bg-inherit text-right">
        <div className="font-poppins text-center mb-10 mt-6 text-2xl text-[#333333] dark:text-[#e0e0e0]">
          Reads
        </div>
        <form className="group relative m-10">
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
        </form>
      </div>
    </div>
  );
};
export default Login;
