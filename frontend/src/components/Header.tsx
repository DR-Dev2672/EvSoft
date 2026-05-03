import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";



const Header = () => {
  
  const {isLoggedIn}=useAppContext()
  return (
    <div className="bg-gray-800 text-white  p-6 ">
      <div className="container mx-auto flex flex-col gap-4 items-center justify-between px-4 sm:flex-row sm:px-6">
        <span className="text-3xl font-bold tracking-tight text-white">
          <Link to="/" className="text-3xl font-bold text-blue-400">
            ⚡ EvSoft.com
          </Link>
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          <Link
            className="flex items-center rounded-2xl px-3 py-2 text-white font-bold transition hover:bg-blue-600"
            to="/map"
          >
            Map
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center rounded-2xl px-3 py-2 text-white font-bold transition hover:bg-blue-600"
                to="/my-stations"
              >
                My Stations
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center rounded-2xl bg-white px-3 py-2 text-blue-600 font-bold transition hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;