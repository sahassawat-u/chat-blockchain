import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

export default function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-pink-600 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-500">
      <div
        className="grid grid-cols-5 lg:grid-cols-6 items-end
      lg:items-center"
      >
        <div
          className="h-24 w-24 relative mx-auto hidden
        lg:inline-grid"
        >
          {/* <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Song_Yuqi_at_The_PUBG_Nations_Cup_on_August_9%2C_2019.png"
          /> */}
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div
            className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full
           "
          >
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to Chat with METAVERSE!</h1>

          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Welcome */}
          {/* Username */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}
