import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
// import Search from "./pages/Search";
import AddStation from "./pages/AddStation";

import MyStations from "./pages/MyStations";
import Details from "./pages/Details";
// import { useParams } from 'react-router-dom';
import Map from "./pages/Map";
import { useAppContext } from "./context/AppContext";
// import Search from "./pages/Search";


function App() {
  const {isLoggedIn}=useAppContext();
  

  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="/"
           element={
            <Layout>
              <Home />
            </Layout>
            }
          /> 
          <Route path="/map"
           element={
            <Layout>
              <Map />
            </Layout>
            }
          /> 
          <Route path="/register"
           element={
            <Layout>
              <Register />
            </Layout>
            }
          /> 
          <Route path="/sign-in"
           element={
            <Layout>
              <SignIn />
            </Layout>
            }
          /> 
          {/* <Route path="/search"
           element={
            <Layout>
              <Search />
            </Layout>
            }
          />  */}
          {isLoggedIn && 
          <>
          <Route path="/add-station"
           element={
            <Layout>
              <AddStation />
            </Layout>
            }
          /> 
          <Route path="/detail/:stationId"
           element={
            <Layout>
              <Details/>
            </Layout>
            }
          /> 
          <Route path="/my-stations"
           element={
            <Layout>
              <MyStations />
            </Layout>
            }
          /> 
          </>}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
