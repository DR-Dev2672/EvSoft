import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import Card from "../components/Card";
import Map from "./Map"



const Home = () => {
  const { data: stations } = useQuery("fetchQuery", () =>
    apiClient.fetchStations()
  );
  console.log(stations);

  const topRowStations = stations?.slice(0, 2) || [];
  const bottomRowStations = stations?.slice(2) || [];
  console.log("topRowStations", topRowStations);
  console.log("bottomRowStations", topRowStations);

  return (
    <>
    <h2 className="text-3xl font-bold text-center">Spot your stations</h2>
      <p className="text-center">Find it according to your choice</p>
    <div className="space-y-3 flex flex-row items-center justify-between gap-16"  >
      
      <div className="grid gap-4 ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topRowStations.map((station) => (
            <Card station={station} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowStations.map((station) => (
            <Card station={station} />
          ))}
        </div>
      </div>
    <div className=""><Map/></div>
    </div>
      
    </>
  );
};

export default Home;