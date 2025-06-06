import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";

import { MdLocationPin } from "react-icons/md";
import { SiStatuspal } from "react-icons/si";
import { ImPower } from "react-icons/im";
import { FaChargingStation } from "react-icons/fa6";


const MyStations = () => {
  const { data: stationData } = useQuery(
    "fetchMyStations",
    apiClient.fetchMyStations,
    {
      onError: () => {},
    }
  );

  if (!stationData) {
    return <span>No Stations found</span>;
  }

  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Stations</h1>
        <Link
          to="/add-station"
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
        >
          Add Station
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {stationData.map((station) => (
          <div
            data-testid="station-card"
            className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5"
          >
            <h2 className="text-2xl font-bold">{station.name}</h2>
            <div className="grid grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <MdLocationPin />
                {station.location.latitude},{station.location.longitude}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <SiStatuspal />
                {station.status}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                <ImPower />
                 {station.powerOutput}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center">
                 <FaChargingStation />
                 {station.connectorType}
              </div>
              
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-station/${station._id}`}
                className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStations;