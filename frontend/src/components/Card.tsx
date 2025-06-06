import { Link } from "react-router-dom";
import type { StationType } from "../../../backend/src/shared/types";

type Props = {
  station: StationType;
};

const LatestDestinationCard = ({ station }: Props) => {
  return (
    <Link
      to={`/detail/${station._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-4">
     <div className="font-bold">{station.name}</div>
     <div className="italic">{station.status}</div>
     <div>{station.connectorType}</div>
     </div>
      
    </Link>
  );
};

export default LatestDestinationCard;