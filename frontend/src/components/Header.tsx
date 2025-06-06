import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";



const Header = () => {
  
  const {isLoggedIn}=useAppContext()
  return (
    <div className="bg-gray-700 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Evoltsoft.com</Link>
        </span>
        <span className="flex space-x-2">
        <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/map"
              >
                Map
              </Link>
              {isLoggedIn ? ( 
                <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-stations"
              >
                My Stations
              </Link>
              <SignOutButton/>
              </>
              ):(
              
          
         
              <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>

              )
              
              }

            </span>
      </div>
    </div>
  );
};

export default Header;