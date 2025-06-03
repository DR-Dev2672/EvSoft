import { BrowserRouter, Route, Routes } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AddStation from "./pages/AddStation";
import Details from "./pages/Details";
import MyStations from "./pages/MyStations";


function App() {
  

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
          <Route path="/search"
           element={
            <Layout>
              <Search />
            </Layout>
            }
          /> 
          <Route path="/add-station"
           element={
            <Layout>
              <AddStation />
            </Layout>
            }
          /> 
          <Route path="/details/:stationId"
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
           
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
