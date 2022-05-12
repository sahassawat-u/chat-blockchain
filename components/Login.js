import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div>
      <div className="flex absolute z-50 h-4/6 w-full justify-center items-center">
        <button
          className="bg-red-300 rounded-lg font-bold p-3 hover:opacity-50"
          onClick={authenticate}
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          className=""
          objectFit="over"
          layout="fill"
          src="https://content.cryptonews.com.au/wp-content/uploads/2021/11/Metaverse-.jpg"
        />
      </div>
    </div>
  );
}

export default Login;
