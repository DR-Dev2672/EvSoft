import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import Card from "../components/Card";
import {Map} from "./Map"



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
    <div className="py-6">
    <h2 className="text-4xl font-bold text-center">Spot your stations</h2>
      <p className="text-center text-xl italic">Find it according to your choice</p>
    </div>
    <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-16 "  >
      
      <div className="grid gap-4 ">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {topRowStations.map((station) => (
            <Card station={station} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {bottomRowStations.map((station) => (
            <Card station={station}  />
          ))}
        </div>
      </div>
    <div className="w-full">
      <Map/>
      </div>
    </div>
      
    </>
  );
};

export default Home;