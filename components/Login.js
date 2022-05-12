import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div>
      <div>
        <button onClick={authenticate}>Login to the METAVERSE</button>
      </div>
    </div>
  );
}

export default Login;
