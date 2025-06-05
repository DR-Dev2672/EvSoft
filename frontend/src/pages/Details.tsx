import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";


const Detail = () => {
  const { stationId } = useParams();

  const { data: station } = useQuery(
    "fetchStationById",
    () => apiClient.fetchStationById(stationId || ""),
    {
      enabled: !!stationId,
    }
  );

  if (!station) {
    return <></>;
  }

  return (

    <>

    <div className="text-4xl my-8 ">Here is the details of your spot........</div>


    <div className="space-y-6 border rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">Name of station is {station.name}</div>    
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">Status is {station.status}</div>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">Connector Type is {station.connectorType}</div>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">Latitude is {station.location.latitude}</div>
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">Longitude is {station.location.longitude}</div>
        
      </div>
      

    </div>
    </>
  );
};

export default Detail;